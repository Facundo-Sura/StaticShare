import { Button } from "@/components/ui/button";
import { Cloud, Database, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M23.3125 11.3125L18.6875 16L23.3125 20.6875M8.6875 11.3125L13.3125 16L8.6875 20.6875M16.5 7.5L15.5 24.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          <h1 className="text-xl font-bold text-foreground">StaticShare</h1>
        </div>
        <nav>
          <Button asChild variant="ghost">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/login">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <section className="text-center p-8 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4 font-headline tracking-tight">
            Host, Share, and Scale. Effortlessly.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your all-in-one solution for free front-end, back-end, and media hosting. Unlimited storage, public URLs, and AI-powered tools.
          </p>
          <Button asChild size="lg" className="font-semibold">
            <Link href="/login">Get Started for Free</Link>
          </Button>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="p-3 bg-secondary rounded-full mb-4">
                <Globe className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Web Hosting</h3>
              <p className="text-muted-foreground text-sm">Deploy your front-end and back-end projects with ease.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="p-3 bg-secondary rounded-full mb-4">
                <Cloud className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">File Storage</h3>
              <p className="text-muted-foreground text-sm">Store images and videos with shareable public URLs.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="p-3 bg-secondary rounded-full mb-4">
                <Database className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Databases</h3>
              <p className="text-muted-foreground text-sm">Connect and manage your data without limits.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        © {new Date().getFullYear()} StaticShare. All rights reserved.
      </footer>
    </div>
  );
}
