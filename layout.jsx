import React from 'react';
import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
