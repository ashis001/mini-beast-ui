import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Mini Beast - Next-Gen Intuitive Data Tool",
  description: "A Smart AI Secured Data tool that automates migration, reconciliation and testing to minimize human intervention and maximize efficiency.",
  icons: {
    icon: "https://cdn.prod.website-files.com/66d705faac628063be399fde/66dd39e12f6ed23bce7b7321_DataAction-%20Green.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
