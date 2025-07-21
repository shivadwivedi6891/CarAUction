
import Footer from '@/components/footer';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { AuthProvider } from '@/context/AuthContext';
import ThemeProvider from '@/context/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemeProvider>
        <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
         </AuthProvider>
         </ThemeProvider>

      </body>
    </html>
  );
}