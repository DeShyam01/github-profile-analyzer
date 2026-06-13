"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card border-t border-border text-card-foreground rounded-t-2xl mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Github Analyzer
            </h3>
            <p className="text-card-foreground/85 text-sm leading-relaxed">
              Analyze GitHub profiles with ease. Get insights into repository
              activity, contributions, and development patterns.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground/85 hover:text-accent-foreground transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://docs.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground/85 hover:text-accent-foreground transition-colors text-sm"
                >
                  GitHub API Docs
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground/85 hover:text-accent-foreground transition-colors text-sm"
                >
                  Next.js
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-card-foreground hover:text-accent-foreground transition-colors text-xl"
                aria-label="GitHub"
                title="Visit our GitHub"
              >
                <FaGithub/>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-card-foreground hover:text-accent-foreground transition-colors text-xl"
                aria-label="LinkedIn"
                title="Visit our LinkedIn"
              >
                <FaLinkedin/>
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-card-foreground hover:text-accent-foreground transition-colors text-xl"
                aria-label="Email"
                title="Send us an email"
              >
                <Mail width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} Github Analyzer. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Built with <span className="text-destructive">♥</span> using Next.js &
            React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
