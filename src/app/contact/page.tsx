'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MapPin, Mail, Phone, Clock, Calendar, ExternalLink, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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

export default function Contact() {
  const [form, setForm] = useState({
    // existing API-compatible fields will be composed on submit
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    zip: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const composedName = `${form.firstName} ${form.lastName}`.trim();

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: composedName || 'Anonymous',
          firstName: form.firstName || undefined,
          lastName: form.lastName || undefined,
          email: form.email || undefined,
          phone: form.phone || undefined,
          company: form.company || undefined,
          jobTitle: form.jobTitle || undefined,
          country: form.country || undefined,
          zip: form.zip || undefined,
          consent: !!form.consent,
          message: form.message || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      setStatus('Thanks! We received your message.');
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        country: '',
        zip: '',
        message: '',
        consent: false,
      });
    } catch (err: any) {
      setStatus(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

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

        {/* Two-column layout: detailed form + map */}
        <section className="w-full bg-card/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid gap-8 lg:grid-cols-2 items-stretch max-w-6xl mx-auto">
              {/* Left: detailed form */}
              <div className="lg:sticky lg:top-24 h-full">
                <Card className="bg-card border-border/50 h-full min-h-[640px] flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-3xl">Get in Touch</CardTitle>
                    <CardDescription>Share a few details and we'll reach out shortly.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">First Name <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                            required
                            value={form.firstName}
                            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                            placeholder="Enter First Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Last Name <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                            required
                            value={form.lastName}
                            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
                          <input
                            type="email"
                            required
                            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Enter Email"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Company name</label>
                          <input
                            type="text"
                            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder="Enter Company Name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Job title</label>
                          <input
                            type="text"
                            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                            value={form.jobTitle}
                            onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                            placeholder="Enter Job Title"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Phone number <span className="text-red-500">*</span></label>
                          <input
                            type="tel"
                            required
                            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="Enter Phone Number"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Country/Region</label>
                          <input
                            type="text"
                            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                            value={form.country}
                            onChange={(e) => setForm({ ...form, country: e.target.value })}
                            placeholder="Enter Country"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Zip Code</label>
                          <input
                            type="text"
                            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                            value={form.zip}
                            onChange={(e) => setForm({ ...form, zip: e.target.value })}
                            placeholder="Enter Zip Code"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Enter Message"
                        />
                      </div>

                      <label className="flex items-start gap-3 text-sm">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                          className="mt-1 h-4 w-4 accent-emerald-500"
                        />
                        <span className="text-muted-foreground">I agree to receive other communications from Dataction Analytics Pvt. Ltd.</span>
                      </label>

                      <div className="flex items-center gap-3 pt-1">
                        <Button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center rounded-md bg-emerald-500 text-white px-5 py-2.5 text-sm font-semibold hover:bg-emerald-600 disabled:opacity-60"
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                        {status && (
                          <span className={`text-sm ${status?.toLowerCase().includes('thanks') ? 'text-emerald-500' : 'text-red-500'}`}>
                            {status}
                          </span>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Right: Google Map embed */}
              <div className="h-full">
                <Card className="bg-background border-border/50 overflow-hidden h-full min-h-[640px]">
                  <CardContent className="p-0 h-full">
                    <div
                      className="h-full w-full"
                      style={{ filter: 'invert(90%) hue-rotate(180deg) saturate(80%) brightness(90%)' }}
                    >
                      <iframe
                        title="Dataction Analytics Pvt. Ltd."
                        src="https://www.google.com/maps?q=Dataction%20Analytics%20Pvt.%20Ltd.%2C%20Fountainhead%20Tower%201%2C%20Phoenix%20Market%20City%2C%20Viman%20Nagar%2C%20Pune%20411014&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: 'block' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
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
