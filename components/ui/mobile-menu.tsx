"use client";
import Link from "next/link";
import { X } from "lucide-react";


export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
return (
<div
className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
>
<div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
<button className="mb-6" onClick={onClose}>
<X className="w-6 h-6" />
</button>
<nav className="flex flex-col space-y-4 text-lg">
<Link href="/#about" onClick={onClose}>About</Link>
<Link href="/#gallery" onClick={onClose}>Gallery</Link>
<Link href="/#location" onClick={onClose}>Location</Link>
<Link href="/#contact" onClick={onClose}>Contact</Link>
</nav>
</div>
</div>
);
}