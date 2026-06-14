// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} SportsLive App. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-slate-600">
          We do not host any streams. All streams are embedded from third-party
          open networks.
        </p>
      </div>
    </footer>
  );
}
