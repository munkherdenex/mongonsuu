"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./mobile-menu";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <nav className="mx-auto flex items-center justify-between h-16 px-4 max-w-5xl">
                <Link href="/" className="text-xl font-semibold">Сүүн Мөнгөн Цацал</Link>
                <button onClick={() => setOpen(true)} className="md:hidden">
                    <Menu className="w-6 h-6" />
                </button>
                <div className="hidden md:flex space-x-6 text-gray-700">
                    <Link href="/#about">About</Link>
                    <Link href="/#gallery">Gallery</Link>
                    <Link href="/#location">Location</Link>
                    <Link href="/#contact">Contact</Link>
                </div>
            </nav>
            <MobileMenu open={open} onClose={() => setOpen(false)} />
        </header>
    );
}
