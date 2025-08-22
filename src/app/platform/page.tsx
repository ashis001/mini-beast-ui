'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowLeft, Cloud, Database, Zap, Server, Activity, Shield, Code, Globe, Layers, Menu } from 'lucide-react';
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

const awsServices = [
  {
    icon: Zap,
    title: "AWS Lambda",
    description: "Serverless compute for data processing pipelines",
    features: ["Event-driven processing", "Auto-scaling", "Cost-effective execution"]
  },
  {
    icon: Server,
    title: "AWS Fargate",
    description: "Containerized workloads without server management",
    features: ["Container orchestration", "Scalable infrastructure", "Managed compute"]
  },
  {
    icon: Globe,
    title: "API Gateway",
    description: "Secure and scalable API management",
    features: ["RESTful APIs", "Authentication", "Rate limiting"]
  },
  {
    icon: Database,
    title: "MongoDB",
    description: "NoSQL database for flexible data storage",
    features: ["Document-based storage", "Horizontal scaling", "Rich queries"]
  },
  {
    icon: Activity,
    title: "Amazon Kinesis",
    description: "Real-time data streaming and analytics",
    features: ["Stream processing", "Real-time analytics", "Data ingestion"]
  },
  {
    icon: Cloud,
    title: "AWS S3",
    description: "Scalable object storage for data lakes",
    features: ["Unlimited storage", "Data durability", "Cost optimization"]
  }
];

const architectureFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption and compliance with SOC 2 Type II standards"
  },
  {
    icon: Layers,
    title: "Microservices Architecture",
    description: "Modular, scalable services for maximum reliability and performance"
  },
  {
    icon: Code,
    title: "API-First Design",
    description: "RESTful APIs enabling seamless integration with existing systems"
  }
];

export default function Platform() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background font-body text-foreground">
      <Header />
      
      <main className="w-full flex-1 pt-24">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                Built on AWS Cloud
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
                Mini Beast leverages enterprise-grade AWS services to deliver secure, scalable, and reliable data migration solutions.
              </p>
            </div>
          </div>
        </section>

        {/* AWS Services Section */}
        <section className="w-full bg-card py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Powered by AWS Services</h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Our platform utilizes the most advanced AWS services to ensure maximum performance, security, and scalability.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {awsServices.map((service, index) => (
                <Card key={index} className="bg-background border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                        <service.icon size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Features */}
        <section className="w-full bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Architecture Excellence</h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Built with modern cloud-native principles for enterprise-grade reliability.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {architectureFeatures.map((feature, index) => (
                <Card key={index} className="bg-card border-border/50 text-center p-6">
                  <CardHeader className="items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-4">
                      <feature.icon size={32} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="w-full bg-card py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Technical Specifications</h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-background border-border/50">
                <CardHeader>
                  <CardTitle>Compute & Processing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-emerald-500">AWS Lambda Functions</h4>
                    <p className="text-sm text-muted-foreground">Event-driven data processing with automatic scaling</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-500">AWS Fargate</h4>
                    <p className="text-sm text-muted-foreground">Containerized workloads for complex data transformations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-500">Auto Scaling</h4>
                    <p className="text-sm text-muted-foreground">Dynamic resource allocation based on workload demands</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border/50">
                <CardHeader>
                  <CardTitle>Data & Storage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-emerald-500">MongoDB Atlas</h4>
                    <p className="text-sm text-muted-foreground">Managed NoSQL database with global clusters</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-500">Amazon Kinesis</h4>
                    <p className="text-sm text-muted-foreground">Real-time data streaming and processing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-500">Amazon S3</h4>
                    <p className="text-sm text-muted-foreground">Secure object storage for data lakes and backups</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Ready to Experience Our Platform?</h2>
              <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                Get started with Mini Beast and leverage the power of AWS cloud infrastructure for your data migrations.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-8 py-3 text-lg font-semibold"
                  onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 text-lg"
                  onClick={() => window.open('https://www.dataction.co/contact-us', '_blank')}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
