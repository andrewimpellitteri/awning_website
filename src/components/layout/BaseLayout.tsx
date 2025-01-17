// Ensure BaseLayout is a Client Component if it contains interactive props
"use client";
import { Navigation } from './navigation';
import Footer from './Footer';

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
