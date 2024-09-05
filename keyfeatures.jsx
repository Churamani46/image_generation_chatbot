import React from 'react';

const KeyFeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powerful Visual AI at Your Fingertips
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our image recognition chatbot can identify a wide range of objects, animals, and scenes with unparalleled accuracy. Explore the key features that make it a game-changer for your visual data needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
              <circle cx="12.1" cy="12.1" r="1"></circle>
            </svg>
            <h3 className="text-xl font-bold">Object Recognition</h3>
            <p className="text-muted-foreground">
              Identify a wide range of everyday objects with high accuracy.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
              <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"></path>
              <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"></path>
              <path d="M8 14v.5"></path>
              <path d="M16 14v.5"></path>
              <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path>
              <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"></path>
            </svg>
            <h3 className="text-xl font-bold">Animal Detection</h3>
            <p className="text-muted-foreground">
              Recognize various animals, from domestic pets to wild creatures.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
              <line x1="3" x2="21" y1="22" y2="22"></line>
              <line x1="6" x2="6" y1="18" y2="11"></line>
              <line x1="10" x2="10" y1="18" y2="11"></line>
              <line x1="14" x2="14" y1="18" y2="11"></line>
              <line x1="18" x2="18" y1="18" y2="11"></line>
              <polygon points="12 2 20 7 4 7"></polygon>
            </svg>
            <h3 className="text-xl font-bold">Scene Classification</h3>
            <p className="text-muted-foreground">
              Understand the context and environment of your images.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
