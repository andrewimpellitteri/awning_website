"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-xl font-bold mb-4">AWNING CLEANING INDUSTRIES</h2>
        <address className="mb-4">
          <p>29 Fitch Street</p>
          <p>New Haven, CT 06515</p>
        </address>
        <div className="space-y-2">
          <p>Email: 
            <a href="mailto:info@cleancanvas.com" className="text-blue-400 hover:underline">info@cleancanvas.com</a>
          </p>
          <p>Phone: 
            <span className="text-blue-400 hover:underline">1-800-542-3009</span> or 
            <span className="text-blue-400 hover:underline">1-203-397-7400</span>
          </p>
          <p>Fax: 
            <span className="text-blue-400 hover:underline">1-203-397-7402</span>
          </p>
        </div>
        <div className="mt-6 text-sm text-gray-400">
          <p>&copy; 2025 Awning Cleaning Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
