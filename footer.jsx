import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col gap-2 py-6 items-center px-4 border">
      <p className="text-xs text-muted-foreground">© 2024 Image Recognition Chatbot. All rights reserved.</p>
      <nav className="flex gap-4">
        <a href="#" className="text-xs hover-underline">Terms of Service</a>
        <a href="#" className="text-xs hover-underline">Privacy Policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
