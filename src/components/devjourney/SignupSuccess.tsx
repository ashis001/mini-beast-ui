import { ArrowRight, BarChart, Bot, BrainCircuit, Cable, Database, GanttChart, Gem, Globe, HeartPulse, LogIn, Menu, Monitor, Search, Shield, Siren, SlidersHorizontal, Smartphone, Users, Wind, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-background/80 px-4 backdrop-blur-sm md:px-8">
    <div className="flex items-center gap-4">
      <a href="#" className="flex items-center gap-2">
        <svg role="img" viewBox="0 0 24 24" className="h-8 w-8 text-primary">
          <path d="M12 0L2 12l10 12 10-12L12 0zm5.24 6.36l-3.18 3.18 3.18 3.18-1.42 1.41-3.18-3.18-3.18 3.18-1.41-1.41 3.18-3.18-3.18-3.18 1.41-1.41 3.18 3.18 3.18-3.18 1.42 1.41z" fill="currentColor"/>
        </svg>
        <span className="text-xl font-bold text-foreground">new relic</span>
      </a>
      <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
        <a href="#" className="text-muted-foreground hover:text-foreground">Platform</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Solutions</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Docs</a>
      </nav>
    </div>
    <div className="hidden items-center gap-4 lg:flex">
      <Button variant="ghost" size="sm">
        <Search className="mr-2" /> Search
      </Button>
      <Button variant="ghost" size="sm">
        <LogIn className="mr-2" /> Log In
      </Button>
      <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20">
        Sign Up
      </Button>
    </div>
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Platform</DropdownMenuItem>
          <DropdownMenuItem>Solutions</DropdownMenuItem>
          <DropdownMenuItem>Pricing</DropdownMenuItem>
          <DropdownMenuItem>Docs</DropdownMenuItem>
          <DropdownMenuItem>Search</DropdownMenuItem>
          <DropdownMenuItem>Log In</DropdownMenuItem>
          <DropdownMenuItem>Sign Up</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
);

const Footer = () => (
  <footer className="w-full bg-card text-card-foreground">
    <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-12 md:grid-cols-5 md:px-8">
      <div className="col-span-2 md:col-span-1">
        <a href="#" className="flex items-center gap-2">
          <svg role="img" viewBox="0 0 24 24" className="h-8 w-8 text-primary">
            <path d="M12 0L2 12l10 12 10-12L12 0zm5.24 6.36l-3.18 3.18 3.18 3.18-1.42 1.41-3.18-3.18-3.18 3.18-1.41-1.41 3.18-3.18-3.18-3.18 1.41-1.41 3.18 3.18 3.18-3.18 1.42 1.41z" fill="currentColor"/>
          </svg>
          <span className="text-xl font-bold">new relic</span>
        </a>
        <p className="mt-4 text-sm text-muted-foreground">©2008-24 New Relic, Inc. All rights reserved.</p>
      </div>
      <div>
        <h4 className="font-semibold">Products</h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href="#" className="text-muted-foreground hover:text-foreground">All-in-one platform</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-foreground">Free account</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Resources</h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href="#" className="text-muted-foreground hover:text-foreground">Docs</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-foreground">Community</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Company</h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
        </ul>
      </div>
       <div>
        <h4 className="font-semibold">Legal</h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
  </footer>
);


const features = [
  { icon: Monitor, title: 'APM', description: 'Monitor and optimize your application performance.' },
  { icon: Smartphone, title: 'Mobile', description: 'Understand your mobile app\'s performance.' },
  { icon: Globe, title: 'Synthetics', description: 'Proactively monitor your endpoints from around the globe.' },
  { icon: GanttChart, title: 'Infrastructure', description: 'Get visibility into your entire stack.' },
  { icon: Database, title: 'Databases', description: 'Monitor the performance of your databases.' },
  { icon: BarChart, title: 'Logs', description: 'Centralize and analyze all your logs.' },
];

const capabilities = [
    {
        icon: BrainCircuit,
        title: "New Relic AI",
        description: "The only AI-powered observability platform.",
        link: "#"
    },
    {
        icon: Users,
        title: "User Journeys",
        description: "Trace every part of the user journey.",
        link: "#"
    },
    {
        icon: HeartPulse,
        title: "Service Health",
        description: "Understand the health of every service.",
        link: "#"
    },
    {
        icon: Shield,
        title: "Vulnerability Management",
        description: "Find and fix vulnerabilities faster.",
        link: "#"
    }
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background font-body text-foreground">
      <Header />

      <main className="w-full flex-1">
        <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center bg-gradient-to-b from-background via-card to-background px-4 pt-24 text-center md:px-8">
          <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute h-64 w-64 rounded-full bg-primary/20 blur-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
          </div>
          <div className="z-10 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              All your data, one platform
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              The New Relic all-in-one observability platform helps you build and run more perfect software.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Start for free <ArrowRight />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Request a demo
              </Button>
            </div>
            <div className="mt-12">
              <p className="text-sm text-muted-foreground">TRUSTED BY TEAMS AT COMPANIES OF ALL SIZES</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground">
                  <Zap size={24} />
                  <Wind size={24} />
                  <Gem size={24} />
                  <Siren size={24} />
                  <Bot size={24} />
                  <Cable size={24} />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-card py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Why New Relic?</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        Get more value from your data with the only platform that offers all-in-one observability.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {capabilities.map((capability, index) => (
                        <Card 
                            key={index} 
                            className="bg-background border-border/50 transform transition-transform hover:scale-105 hover:shadow-lg"
                        >
                            <CardHeader className="items-center text-center">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <capability.icon size={28} />
                                </div>
                                <CardTitle>{capability.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-muted-foreground">{capability.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


        <section className="w-full bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">One platform, 30+ capabilities</h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Drill down into your stack with our comprehensive suite of monitoring tools, all in one place.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button variant="outline">
                    See All Capabilities <ArrowRight />
                </Button>
            </div>
          </div>
        </section>
        
        <section className="w-full bg-card py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Ready to get started?</h2>
                    <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                        Create a free account and start monitoring your stack in minutes. No credit card required.
                    </p>
                    <div className="mt-8">
                        <Button size="lg">
                            Sign Up - It's Free <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}