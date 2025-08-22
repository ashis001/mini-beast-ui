'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ExternalLink, Calendar, Menu } from 'lucide-react';

export default function DemoInterestPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    notes: '',
    preferredDate: '', // YYYY-MM-DD
    priority: 'medium' as 'low' | 'medium' | 'high' | 'urgent',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName || undefined,
          lastName: form.lastName || undefined,
          customerName: `${form.firstName} ${form.lastName}`.trim() || undefined,
          customerEmail: form.customerEmail || undefined,
          customerPhone: form.customerPhone,
          customerAddress: form.customerAddress || undefined,
          notes: form.notes || undefined,
          priority: form.priority,
          followUpDate: form.preferredDate || undefined,
          status: 'new',
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      setStatus('Thanks! We will reach out to schedule your demo.');
      setForm({
        firstName: '', lastName: '', customerEmail: '', customerPhone: '', customerAddress: '', notes: '', preferredDate: '', priority: 'medium'
      });
    } catch (err: any) {
      setStatus(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-foreground">
      {/* Common Header (same as homepage) */}
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
          <Button size="sm" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10" onClick={() => (window.location.href = '/demo')}>
            Book Demo
          </Button>
          <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20" onClick={() => (window.location.href = '/contact')}>
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
              <DropdownMenuItem onClick={() => (window.location.href = '/')}>Home</DropdownMenuItem>
              <DropdownMenuItem onClick={() => (window.location.href = '/platform')}>Platform</DropdownMenuItem>
              <DropdownMenuItem onClick={() => (window.location.href = '/teams')}>Teams</DropdownMenuItem>
              <DropdownMenuItem onClick={() => (window.location.href = '/docs')}>Docs</DropdownMenuItem>
              <DropdownMenuItem onClick={() => (window.location.href = '/demo')}>Book Demo</DropdownMenuItem>
              <DropdownMenuItem onClick={() => (window.location.href = '/contact')}>Contact Us</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Book a Live Demo</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Tell us a bit about you. We'll tailor a live walkthrough to your needs and get you up to speed fast.
          </p>
        </section>

        {/* Form */}
        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <Card className="bg-card/60 border-border/50">
              <CardHeader>
                <CardTitle className="text-3xl">Request a Demo</CardTitle>
                <CardDescription>Share your details and preferred date. Our team will confirm a slot.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input type="text" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                        value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="Enter First Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input type="text" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                        value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Enter Last Name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input type="email" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                        value={form.customerEmail} onChange={(e) => setForm({ ...form, customerEmail: e.target.value })} placeholder="Enter Email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone <span className="text-red-500">*</span></label>
                      <input type="tel" required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                        value={form.customerPhone} onChange={(e) => setForm({ ...form, customerPhone: e.target.value })} placeholder="Enter Phone" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Company / Address</label>
                    <input type="text" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                      value={form.customerAddress} onChange={(e) => setForm({ ...form, customerAddress: e.target.value })} placeholder="Company or Address" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">What would you like to see?</label>
                    <textarea className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40" rows={4}
                      value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Tell us what matters for your demo" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Preferred Date</label>
                      <div className="flex items-center gap-2">
                        <input type="date" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                          value={form.preferredDate} onChange={(e) => setForm({ ...form, preferredDate: e.target.value })} />
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Priority</label>
                      <select className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                        value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value as any })}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button type="submit" disabled={loading} className="inline-flex items-center rounded-md bg-emerald-500 text-white px-5 py-2.5 text-sm font-semibold hover:bg-emerald-600 disabled:opacity-60">
                      {loading ? 'Submitting...' : 'Request Demo'}
                    </Button>
                    {status && (
                      <span className={`text-sm ${status?.toLowerCase().includes('thanks') ? 'text-emerald-500' : 'text-red-500'}`}>
                        {status}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground pt-2">By submitting, you agree to be contacted regarding your request.</p>
                </form>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/subscription-dataction/consultation', '_blank')}>
                Or book directly <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
