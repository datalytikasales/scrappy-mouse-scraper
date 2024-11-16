import { Mail, Linkedin, Phone, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:joseph.lweya@gmail.com"
                className="flex items-center hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                joseph.lweya@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-lweya-03bb8321/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Joseph Lweya
              </a>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +254717158091
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Developer</h3>
            <a
              href="https://squarehaul.online"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-accent transition-colors"
            >
              <Globe className="w-5 h-5 mr-2" />
              Squarehaul Online
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Scrappy Mouse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};