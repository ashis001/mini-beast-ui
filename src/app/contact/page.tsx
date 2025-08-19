'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MapPin, Mail, Phone, Clock, Calendar, ExternalLink, Menu } from 'lucide-react';
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
          <DropdownMenuItem onClick={() => window.location.href = '/contact'}>Contact Us</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
);

export default function Contact() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background font-body text-foreground">
      <Header />
      
      <main className="w-full flex-1 pt-24">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                Contact Us
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
                Let's make great things happen. Reach out to the team today and start your journey with Mini Beast!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full bg-card py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Office Location */}
              <Card className="bg-background border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mx-auto mb-4">
                    <MapPin size={32} />
                  </div>
                  <CardTitle className="text-xl">Office Location</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Dataction Analytics Pvt. Ltd.</strong><br />
                    Office No. 2, 8th Floor,<br />
                    Fountainhead Tower 1,<br />
                    Phoenix Market City,<br />
                    Viman Nagar, Pune – 411014
                  </p>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="bg-background border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mx-auto mb-4">
                    <Phone size={32} />
                  </div>
                  <CardTitle className="text-xl">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <Button 
                      variant="outline" 
                      className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                      onClick={() => window.open('mailto:info@dataction.org', '_blank')}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      info@dataction.org
                    </Button>
                  </div>
                  <div>
                    <Button 
                      variant="outline" 
                      className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                      onClick={() => window.open('tel:+918149002246', '_blank')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      +91-8149002246
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-background border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mx-auto mb-4">
                    <Clock size={32} />
                  </div>
                  <CardTitle className="text-xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Monday - Friday:</strong><br />9 AM - 6 PM</p>
                    <p><strong>Saturday:</strong><br />10 AM - 4 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="w-full bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Ready to transform your data operations? Schedule a consultation with our team to discuss your specific needs and learn how Mini Beast can help accelerate your data migration journey.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Schedule Consultation */}
              <Card className="bg-card border-border/50 p-6">
                <CardHeader className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mx-auto mb-4">
                    <Calendar size={32} />
                  </div>
                  <CardTitle className="text-xl">Schedule a Consultation</CardTitle>
                  <CardDescription>
                    Book a personalized demo and consultation session with our experts
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    size="lg" 
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-8 py-3 text-lg font-semibold"
                    onClick={() => window.open('https://calendly.com/subscription-dataction/consultation', '_blank')}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Call
                  </Button>
                </CardContent>
              </Card>

              {/* Direct Contact */}
              <Card className="bg-card border-border/50 p-6">
                <CardHeader className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mx-auto mb-4">
                    <Mail size={32} />
                  </div>
                  <CardTitle className="text-xl">Direct Contact</CardTitle>
                  <CardDescription>
                    Reach out directly via email for immediate assistance
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 text-lg"
                    onClick={() => window.open('mailto:info@dataction.org', '_blank')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
              <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                Stay ahead with data-driven insights. Join the Mini Beast community today and transform your data operations!
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-8 py-3 text-lg font-semibold"
                  onClick={() => window.open('https://calendly.com/subscription-dataction/consultation', '_blank')}
                >
                  Start Your Journey <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 text-lg"
                  onClick={() => window.open('mailto:info@dataction.org', '_blank')}
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
