import { MousePointerClick } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-secondary to-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <MousePointerClick className="w-12 h-12 text-primary animate-bounce" />
          <h1 className="text-5xl font-bold text-slate-800 ml-4">Scrappy Mouse</h1>
        </div>
        <p className="text-xl text-slate-600 mt-4">
          Your intelligent web scraping companion. Fast, reliable, and ready to gather data.
        </p>
      </div>
    </div>
  );
};