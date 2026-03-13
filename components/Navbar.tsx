"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import AvailabilityDrawer from "./AvailabilityDrawer";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Residence", href: "/" },
    { name: "Amenities & Rooms", href: "/accommodations" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Location", href: "/#location" },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700 px-6 py-4 md:px-12",
        isScrolled || isMobileMenuOpen 
          ? "bg-rich-black/95 backdrop-blur-xl border-b border-white/5 py-3" 
          : "bg-transparent py-8"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="group inline-block">
              <span className="text-xl md:text-2xl font-serif tracking-luxury uppercase text-cream transition-colors group-hover:text-gold">
                Richcourt
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-[9px] uppercase tracking-[0.3em] transition-colors font-sans py-2",
                    isActive ? "text-gold" : "text-cream/70 hover:text-gold"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 w-full h-px bg-gold/50"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* Action 1: The Drawer Trigger */}
            <button 
              onClick={() => setIsAvailabilityOpen(true)}
              className="hidden lg:block text-[9px] uppercase tracking-luxury text-cream/60 hover:text-gold transition-colors mr-2"
            >
              Check Availability
            </button>

            {/* Action 2: The Reserve Page Link */}
            {pathname !== "/reserve" && (
              <Link 
                href="/reserve" 
                className="hidden md:block border border-gold/40 px-8 py-2.5 text-[9px] uppercase tracking-luxury text-gold hover:bg-gold hover:text-rich-black transition-all duration-500"
              >
                Reserve
              </Link>
            )}
            
            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-gold p-2 hover:bg-white/5 rounded-full transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={24} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={24} strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: "100%" }} 
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-rich-black h-screen w-full flex flex-col items-center justify-center z-40 px-6"
            >
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    key={link.name}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className={cn(
                        "text-2xl font-serif tracking-widest uppercase",
                        pathname === link.href ? "text-gold italic" : "text-cream"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="flex flex-col gap-4 mt-8 w-full items-center">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsAvailabilityOpen(true);
                    }}
                    className="text-[10px] uppercase tracking-luxury text-gold"
                  >
                    Check Availability
                  </button>
                  <Link 
                    href="/reserve" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="border border-gold px-12 py-4 text-[10px] uppercase tracking-luxury text-gold hover:bg-gold hover:text-black transition-all"
                  >
                    Reserve Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AvailabilityDrawer 
        isOpen={isAvailabilityOpen} 
        onClose={() => setIsAvailabilityOpen(false)} 
      />
    </>
  );
}