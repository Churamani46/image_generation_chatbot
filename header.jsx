import React from 'react';

function Header() {
  return (
    <header className="flex items-center h-16 px-4 border">
      <a href="#" className="flex items-center justify-center">
        <BotIcon className="h-6 w-6" />
        <span className="sr-only">Image Recognition Chatbot</span>
      </a>
      <nav className="ml-auto flex gap-4">
        <a href="#" className="text-sm font-medium hover-underline">Features</a>
        <a href="#" className="text-sm font-medium hover-underline">Testimonials</a>
        <a href="#" className="text-sm font-medium hover-underline">Pricing</a>
        <a href="#" className="text-sm font-medium hover-underline">Contact</a>
        <div className="flex gap-2 login">
          <a
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover-bg-primary"
          >
            Login
          </a>
          {/* <a
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm hover-bg-accent hover-text-accent"
          >
            Sign Up
          </a> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;

// Helper function for BotIcon can be added here or imported if already available in the project
function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}
