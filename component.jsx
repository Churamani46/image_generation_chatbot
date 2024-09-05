import React from 'react';
import Header from './header';
import Feature from './keyfeatures'
import Testimonial from './testimonial'
import Footer from './footer';

export default function Component() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12">
          <div className="container">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter">Unlock the Power of Visual AI</h1>
                <p className="max-w-[600px] text-muted-foreground">
                  Our image recognition chatbot can identify objects, animals, and scenes in your photos with
                  incredible accuracy. Get started today and revolutionize how you interact with visual data.
                </p>
              </div>
              <div className="flex gap-2">
                <a href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover-bg-primary">
                  Try the Chatbot
                </a>
                <a href="#" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm hover-bg-accent hover-text-accent">
                  Learn More
                </a>
              </div>
            </div>
            {/* <img
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover w-full"
            /> */}
          </div>
        </section>
        <Feature />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

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

// Add other icons like DogIcon, DotIcon, and LandmarkIcon similarly...
