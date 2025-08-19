'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowLeft, Book, Code, Database, Shield, Zap, ArrowRight, FileText, Download, ExternalLink, Menu } from 'lucide-react';
import Link from 'next/link';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-background/80 px-4 backdrop-blur-sm md:px-8">
    <div className="flex items-center gap-4">
      <Link href="/" className="flex flex-col items-start">
        <img src="https://cdn.prod.website-files.com/66d705faac628063be399fde/66dd39e12f6ed23bce7b7321_DataAction-%20Green.svg" alt="DataAction Logo" className="h-8 w-auto" />
        <span className="text-xs text-emerald-500 self-end mt-1 font-bold">mini beast</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium lg:flex ml-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
        <Link href="/platform" className="text-muted-foreground hover:text-foreground">Platform</Link>
        <Link href="/teams" className="text-muted-foreground hover:text-foreground">Teams</Link>
        <Link href="/docs" className="text-muted-foreground hover:text-foreground">Docs</Link>
      </nav>
    </div>
    <div className="hidden items-center gap-4 lg:flex">
      <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20" onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}>
        Contact Us
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
          <DropdownMenuItem onClick={() => window.location.href = '/'}>Home</DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.location.href = '/platform'}>Platform</DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.location.href = '/teams'}>Teams</DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.location.href = '/docs'}>Docs</DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}>Contact Us</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
);

const docSections = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Quick start guide and basic setup",
    items: [
      "Installation & Setup",
      "First Data Migration",
      "Configuration Basics",
      "Authentication Setup"
    ]
  },
  {
    icon: Database,
    title: "Data Migration",
    description: "Complete guide to data migration workflows",
    items: [
      "Source Connection Setup",
      "Schema Mapping",
      "Data Transformation",
      "Migration Execution"
    ]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Security best practices and compliance",
    items: [
      "Data Encryption",
      "Access Controls",
      "Audit Logging",
      "Compliance Standards"
    ]
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation",
    items: [
      "REST API Endpoints",
      "Authentication",
      "Request/Response Format",
      "Error Handling"
    ]
  },
  {
    icon: Zap,
    title: "Advanced Features",
    description: "Advanced configuration and optimization",
    items: [
      "Custom Transformations",
      "Performance Tuning",
      "Monitoring & Alerts",
      "Batch Processing"
    ]
  },
  {
    icon: FileText,
    title: "Troubleshooting",
    description: "Common issues and solutions",
    items: [
      "Migration Errors",
      "Performance Issues",
      "Connection Problems",
      "Data Validation Failures"
    ]
  }
];

const quickLinks = [
  {
    title: "API Documentation",
    description: "Complete REST API reference",
    icon: Code,
    link: "#"
  },
  {
    title: "Migration Guide",
    description: "Step-by-step migration tutorial",
    icon: Database,
    link: "#"
  },
  {
    title: "Security Guide",
    description: "Security best practices",
    icon: Shield,
    link: "#"
  }
];

const resources = [
  {
    title: "SDK Downloads",
    description: "Client libraries and SDKs",
    icon: Download,
    items: ["Python SDK", "Node.js SDK", "Java SDK", "REST Client"]
  },
  {
    title: "Sample Code",
    description: "Code examples and templates",
    icon: Code,
    items: ["Migration Scripts", "API Examples", "Configuration Templates", "Best Practices"]
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: ExternalLink,
    items: ["Getting Started", "Advanced Features", "Troubleshooting", "Best Practices"]
  }
];

export default function Docs() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background font-body text-foreground">
      <Header />
      
      <main className="w-full flex-1 pt-24">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                Documentation
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
                Everything you need to get started with Mini Beast data migration platform.
              </p>
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-8 py-3 text-lg font-semibold"
                  onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="w-full bg-card py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold md:text-3xl">Quick Access</h2>
              <p className="mt-4 text-muted-foreground">Jump to the most commonly used documentation</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {quickLinks.map((link, index) => (
                <Card key={index} className="bg-background border-border/50 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mx-auto mb-4">
                      <link.icon size={24} />
                    </div>
                    <CardTitle className="text-xl">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="w-full bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Documentation Sections</h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Comprehensive guides and references for all aspects of Mini Beast platform.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {docSections.map((section, index) => (
                <Card key={index} className="bg-card border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                        <section.icon size={20} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="mt-2">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-500 cursor-pointer transition-colors">
                          <ArrowRight className="h-3 w-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="w-full bg-card py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Developer Resources</h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Tools, SDKs, and resources to accelerate your development.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-background border-border/50">
                  <CardHeader className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mx-auto mb-4">
                      <resource.icon size={32} />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {resource.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                          <span className="text-muted-foreground hover:text-emerald-500 cursor-pointer transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="w-full bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Need Help?</h2>
              <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-8 py-3 text-lg font-semibold"
                  onClick={() => window.open('mailto:info@dataction.org', '_blank')}
                >
                  Contact Support
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 text-lg"
                  onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
