'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Bug, ArrowLeft, Menu } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: "Gaurav",
    role: "Chief Technology Officer",
    description: "Seasoned technology leader with extensive expertise in enterprise data architecture and AI-driven solutions. Spearheads strategic technology initiatives and drives innovation across the platform.",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Nitish", 
    role: "Principal Data Engineer",
    description: "Distinguished data engineering specialist with profound knowledge in large-scale data migration and real-time processing systems. Architected core migration algorithms powering the platform.",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Sumit",
    role: "Senior Software Architect", 
    description: "Accomplished software architect with comprehensive experience in distributed systems and cloud-native technologies. Designs scalable infrastructure supporting enterprise-grade data operations.",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Anil",
    role: "Lead Security Engineer",
    description: "Expert cybersecurity professional specializing in data protection and compliance frameworks. Ensures enterprise-grade security across all data migration and processing workflows.",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Pranav",
    role: "Senior DevOps Engineer",
    description: "Proficient DevOps engineer with advanced expertise in containerization, orchestration, and CI/CD pipelines. Maintains high-availability infrastructure supporting mission-critical data operations.",
    image: "/api/placeholder/200/200"
  }
];

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
      <Button size="sm" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10" onClick={() => window.location.href = '/demo'}>
        Book Demo
      </Button>
      <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20" onClick={() => window.location.href = '/contact'}>
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
          <DropdownMenuItem onClick={() => window.location.href = '/demo'}>Book Demo</DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.location.href = '/contact'}>Contact Us</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
);

export default function Teams() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background font-body text-foreground">
      <Header />
      
      <main className="w-full flex-1 pt-24">
        <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
                Leadership Excellence
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-slate-300">
                Our distinguished team of technology leaders brings decades of collective expertise in enterprise data management, 
                artificial intelligence, and scalable infrastructure solutions to deliver unparalleled data operations excellence.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
                    </div>
                    <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                    <CardDescription className="text-emerald-400 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
