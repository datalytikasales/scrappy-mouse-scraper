import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const PricingSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for your interest! We'll be in touch soon.");
  };

  return (
    <div className="bg-secondary py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Professional Scraping Services</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-5xl font-bold text-primary mb-4">$35</div>
          <div className="text-xl text-slate-600 mb-8">per hour</div>
          <ul className="text-left space-y-4 mb-8">
            <li className="flex items-center">
              <span className="mr-2">✓</span> Custom scraping solutions
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span> Data cleaning and formatting
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span> Regular maintenance and updates
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="mb-4"
            />
            <Button type="submit" className="w-full">
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};