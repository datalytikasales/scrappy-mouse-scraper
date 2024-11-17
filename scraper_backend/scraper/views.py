from django.shortcuts import render

# Create your views here.

import os
import json
from datetime import datetime
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.http import HttpResponse
from bs4 import BeautifulSoup
import requests

# Create directory for storing JSON files if it doesn't exist
OUTPUT_DIR = os.path.join(settings.BASE_DIR, 'scraper', 'output')
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

@csrf_exempt
def home(request):
    return HttpResponse("Welcome to the Scraper Backend!")

def scrape_view(request):
    print("Received a request at /scrape")
    if request.method == "POST":
        print("Request method is POST")
        url = request.POST.get('url')
        print(f"Scraping URL: {url}")
        if not url:
            return JsonResponse({"error": "URL is required"}, status=400)
        
        try:
            # Fetch the webpage content
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
            }
            response = requests.get(url, headers=headers)
            response.raise_for_status()

            # Parse the HTML
            soup = BeautifulSoup(response.text, 'html.parser')
            products = []

            for article in soup.select("article.prd"):
                try:
                    image = article.select_one(".img-c img")["data-src"]
                    name = article.select_one(".info .name").text.strip()
                    price = article.select_one(".info .prc").text.strip()
                    old_price = article.select_one(".info .s-prc-w .old")
                    old_price = old_price.text.strip() if old_price else None
                    discount = article.select_one(".info .s-prc-w .bdg")
                    discount = discount.text.strip() if discount else None

                    products.append({
                        "name": name,
                        "image": image,
                        "price": price,
                        "old_price": old_price,
                        "discount": discount,
                    })
                except Exception as e:
                    print(f"Error parsing product: {e}")

            # Save the products to a JSON file
            timestamp = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
            file_name = f"jumia-products-{timestamp}.json"
            file_path = os.path.join(OUTPUT_DIR, file_name)
            with open(file_path, "w") as f:
                json.dump(products, f, indent=4)

            # Return the file link
            return JsonResponse({
                "message": "Scraping completed successfully!",
                "file_url": f"/static/output/{file_name}"
            })
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    else:
        print("Invalid request method")
        return JsonResponse({"error": "Invalid request method"}, status=405)

