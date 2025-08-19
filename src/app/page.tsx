'use client';

import { ArrowRight, BarChart, Bot, BrainCircuit, Bug, Cable, Database, GanttChart, Gem, Globe, HeartPulse, LogIn, Menu, Monitor, Search, Shield, Siren, SlidersHorizontal, Smartphone, Users, Wind, Zap, ArrowRightLeft, ShieldCheck, GitCompareArrows, Code, Server, Layers, Eye, Activity, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AnimatedParticles } from '@/components/ui/animated-particles';
import { FloatingElements } from '@/components/ui/floating-elements';
import Image from 'next/image';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-background/80 px-4 backdrop-blur-sm md:px-8">
    <div className="flex items-center gap-4">
      <a href="#" className="flex flex-col items-start">
        <img src="https://cdn.prod.website-files.com/66d705faac628063be399fde/66dd39e12f6ed23bce7b7321_DataAction-%20Green.svg" alt="DataAction Logo" className="h-8 w-auto" />
        <span className="text-xs text-emerald-500 self-end mt-1 font-bold">mini beast</span>
      </a>
      <nav className="hidden items-center gap-6 text-sm font-medium lg:flex ml-8">
        <a href="/platform" className="text-muted-foreground hover:text-foreground">Platform</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Solutions</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a>
        <a href="/teams" className="text-muted-foreground hover:text-foreground">Teams</a>
        <a href="/docs" className="text-muted-foreground hover:text-foreground">Docs</a>
      </nav>
    </div>
    <div className="hidden items-center gap-4 lg:flex">
      <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20" onClick={() => window.location.href = '/signup'}>
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
          <DropdownMenuItem onClick={() => window.location.href = '/platform'}>Platform</DropdownMenuItem>
          <DropdownMenuItem>Solutions</DropdownMenuItem>
          <DropdownMenuItem>Pricing</DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.location.href = '/teams'}>Teams</DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.location.href = '/docs'}>Docs</DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.location.href = '/signup'}>Sign Up</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
);

const Footer = () => (
  <footer className="w-full bg-card text-card-foreground">
    <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-12 md:grid-cols-5 md:px-8">
      <div className="col-span-2 md:col-span-1">
        <a href="#" className="flex flex-col items-start">
          <img src="https://cdn.prod.website-files.com/66d705faac628063be399fde/66dd39e12f6ed23bce7b7321_DataAction-%20Green.svg" alt="DataAction Logo" className="h-8 w-auto" />
          <span className="text-xs text-emerald-500 self-end mt-1 font-bold">mini beast</span>
        </a>
        <p className="mt-4 text-sm text-muted-foreground">©2008-24 Mini Beast, Inc. All rights reserved.</p>
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


const integrations = [
  { icon: Gem, title: 'Snowflake', description: 'Cloud data warehouse integration' },
  { icon: Database, title: 'PostgreSQL', description: 'Seamless data migration from PostgreSQL' },
  { icon: Server, title: 'Oracle', description: 'Enterprise-grade Oracle data transformation' },
  { icon: BarChart, title: 'MySQL', description: 'MySQL to data warehouse migration' },
  { icon: Cable, title: 'SQL', description: 'SQL to relational data migration' },
  { icon: Zap, title: 'BigQuery', description: 'Google BigQuery data pipeline integration' },
];

const features = [
  { icon: ArrowRightLeft, title: 'Data Migration', description: 'OLAP to OLAP, OLTP to OLAP migrations.' },
  { icon: ShieldCheck, title: 'Data Validation', description: 'Ensure accuracy and quality of migrated data.' },
  { icon: GitCompareArrows, title: 'Data Reconciliation', description: 'Compare and sync data across systems.' },
  { icon: Database, title: 'Schema Mapping', description: 'Intelligent schema transformation and mapping.' },
  { icon: Activity, title: 'Real-time Monitoring', description: 'Track migration progress in real-time.' },
  { icon: CheckCircle, title: 'Quality Assurance', description: 'Automated data quality checks and reports.' },
];

const capabilities = [
    {
        icon: BrainCircuit,
        title: "mini beast AI",
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
        <section className="relative flex min-h-[100vh] w-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 pt-24 text-center md:px-8 overflow-hidden">
          {/* Animated particle background */}
          <div className="absolute inset-0 z-0">
            <AnimatedParticles />
          </div>
          
          {/* Floating interactive elements */}
          <div className="absolute inset-0 z-10">
            <FloatingElements />
          </div>
          
          {/* Enhanced gradient overlays */}
          <div className="absolute inset-0 z-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-500/8 via-transparent to-emerald-500/8"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-emerald-500/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-400/5 to-transparent"></div>
          </div>
          <div className="relative z-30 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Next-Gen Intuitive Data Tool
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              A Smart Secured Data tool that automates migration, reconciliation and testing to minimize human intervention and maximize efficiency
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-8 py-3 text-lg font-semibold" onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}>
                Start now for <span className="font-bold">FREE</span> <ArrowRight />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 text-lg" onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}>
                Book a Demo
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full bg-card py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Seamless integration with 50+ data sources and Get up to 5x faster data migration with Mini Beast</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        Start now for free. Connect to any data source and migrate with intelligent schema mapping in just a few clicks.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {integrations.map((integration, index) => (
                        <Card 
                            key={index} 
                            className="bg-background border-border/50 transform transition-transform hover:scale-105 hover:shadow-lg"
                        >
                            <CardHeader className="items-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <integration.icon size={32} />
                                </div>
                                <CardTitle className="text-xl">{integration.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-muted-foreground">{integration.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>



        <section className="w-full bg-card py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">The world's best data teams run on Mini Beast</h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Trusted by thousands of data engineers to migrate, validate, and reconcile critical business data.
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
                    Read Customer Stories <ArrowRight />
                </Button>
            </div>
          </div>
        </section>
        
        <section className="w-full bg-background py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Enterprise-grade security for your data migrations</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                        Your sensitive data is protected throughout the entire migration process with industry-leading security standards.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    <Card className="bg-card border-border/50 p-6">
                        <CardHeader className="items-center text-center">
                            <Shield className="h-12 w-12 text-primary mb-4" />
                            <CardTitle>SOC 2 Type II</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-muted-foreground">Independently audited security controls and processes.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card border-border/50 p-6">
                        <CardHeader className="items-center text-center">
                            <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                            <CardTitle>GDPR Compliant</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-muted-foreground">Full compliance with European data protection regulations.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card border-border/50 p-6">
                        <CardHeader className="items-center text-center">
                            <Database className="h-12 w-12 text-primary mb-4" />
                            <CardTitle>Data Encryption</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-muted-foreground">End-to-end encryption for data in transit and at rest.</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="text-center mt-12">
                    <Button variant="outline">
                        View Certifications <ArrowRight />
                    </Button>
                </div>
            </div>
        </section>
        
        <section className="w-full bg-card py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Start your data migration today for free</h2>
                    <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                        Sign up for free, no credit card required. Start migrating your data with intelligent mapping and validation tools.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-8 py-3 text-lg font-semibold" onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}>
                            Start now for free <ArrowRight />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto border-emerald-500 text-emerald-600 hover:bg-emerald-500/10 px-8 py-3 text-lg" onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}>
                            Request a demo
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
