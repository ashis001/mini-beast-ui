'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Bug, ArrowLeft, Mail, Phone, Menu } from 'lucide-react';
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
        <Link href="#" className="text-muted-foreground hover:text-foreground">Solutions</Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">Pricing</Link>
        <Link href="/teams" className="text-muted-foreground hover:text-foreground">Teams</Link>
        <Link href="/docs" className="text-muted-foreground hover:text-foreground">Docs</Link>
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
          <DropdownMenuItem onClick={() => window.location.href = '/'}>Home</DropdownMenuItem>
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

export default function SignUp() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background font-body text-foreground">
      <Header />
      
      <main className="w-full flex-1 flex items-center justify-center pt-24">
        <section className="w-full max-w-2xl px-4 md:px-8">
          <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white mb-4">
                Welcome to Mini Beast
              </CardTitle>
              <CardDescription className="text-lg text-slate-300">
                Ready to transform your data operations?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">DA</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Connect with DataAction Team
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  To create your Mini Beast account and get started with our next-generation data tools, 
                  please connect with our DataAction team. We'll help you set up your personalized workspace 
                  and provide onboarding support.
                </p>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-slate-700/50 border-slate-600/50">
                  <CardContent className="p-4 text-center">
                    <Mail className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-2">Email Us</h4>
                    <p className="text-sm text-slate-300 mb-3">
                      Reach out to our team for account setup
                    </p>
                    <Button 
                      className="w-full bg-emerald-500 hover:bg-emerald-600"
                      onClick={() => window.open('mailto:info@dataction.org', '_blank')}
                    >
                      info@dataction.org
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-700/50 border-slate-600/50">
                  <CardContent className="p-4 text-center">
                    <Phone className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-2">Contact Form</h4>
                    <p className="text-sm text-slate-300 mb-3">
                      Fill out our contact form for quick response
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                      onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}
                    >
                      Contact Form
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center pt-4">
                <p className="text-sm text-slate-400">
                  Our team typically responds within 24 hours to help you get started with Mini Beast.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
