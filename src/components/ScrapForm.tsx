import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const ScrapForm = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedFile, setGeneratedFile] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/scraper/scrape/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ url }),
      });
  
      // Ensure response is OK before proceeding
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || "Something went wrong!");
        return;
      }
  
      // Process the successful response
      const data = await response.json();
      toast.success("Job completed successfully!");
      setGeneratedFile(data.file_url);
    } catch (error) {
      console.error("Error during fetch:", error); // Log the error for debugging
      toast.error("Failed to scrape the URL. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Start Scraping</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="url"
            placeholder="Enter Jumia product URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Processing..." : "Start Scraping"}
        </Button>
      </form>

      {generatedFile && (
        <div className="mt-4">
          <p>Download your file:</p>
          <a
            href={generatedFile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {generatedFile}
          </a>
        </div>
      )}
    </div>
  );
};
