import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import FloatingNavbar from '@/components/navbar'; // Adjust import path if needed
import Footer from '@/components/footer'; // Adjust import path if needed
import WhatsAppButton from '../components/WhatsAppButton';
import FloatingGoatChat from '@/components/FloatingGoatChat';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'AL Barbari Goat Farming | Premium Livestock & Farm Services in Lahore',
    template: '%s | AL Barbari Goat Farming',
  },
  description: 'Discover top-quality healthy goats for sale, Sadqah, Aqeeqa, and secure doorstep delivery across Lahore. 100% verified transactions and transparent services.',
  keywords: ['goat farming Lahore', 'Al Barbari', 'buy goats online', 'Sadqah services Lahore', 'Qurbani animals Lahore'],
  icons: {
    icon: '/logo.png', // Place your favicon in the public folder
    apple: '/logo.png',
  },
  openGraph: {
    title: 'AL Barbari Goat Farming',
    description: 'Premium livestock, goat farming services, and reliable home delivery in Lahore.',
    url: 'https://albarbarigoatfarming.com',
    siteName: 'AL Barbari Goat Farming',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#f8faf9] text-[#0a1a0f] antialiased selection:bg-[#ffc222] selection:text-[#0a1a0f]">
        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
         <FloatingGoatChat />
        {/* Floating Navbar (Sits above page content with high z-index) */}
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