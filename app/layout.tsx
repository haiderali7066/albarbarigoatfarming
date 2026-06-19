import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Adjust font as needed
import './globals.css';
import FloatingNavbar from '@/components/navbar'; // Adjust import path
import Footer from '@/components/footer'; // Adjust import path

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agrion Farm | Agriculture & Pure Eco Farming',
  description: 'Best Quality Food and Eco Farming practices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        {/* Floating Navbar is fixed and z-indexed high, so it sits above the page content */}
        <FloatingNavbar />
        
        {/* Main Content Area */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}