// --- FILE: components/Footer.tsx ---
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light mt-16">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Historical Me. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
