'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Cases' },
  { href: '/blog', label: 'Blog' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/career', label: 'Career' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/15"
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-[1400px]">
        <div className="flex-shrink-0">
          <Link href="/" className="block w-[114px] h-[39px] relative">
            <img
              src="https://framerusercontent.com/images/nSE9jLNqztxbtPn7sIDqD2Yj0I.png"
              alt="Brand Logo"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center h-[48px]">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isFirst={index === 0}
            />
          ))}
        </div>

        <div className="flex-shrink-0">
          <a
            href="https://www.framer.com/marketplace/templates/agevia/?via=realmehedi1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center h-[48px] overflow-hidden rounded-full"
          >
            <div
              className="relative px-6 py-3 transition-all duration-300"
              style={{ backgroundColor: 'rgb(228, 254, 123)' }}
            >
              <span
                className="relative z-10 font-medium text-[15px] whitespace-nowrap"
                style={{ color: 'rgb(15, 43, 44)' }}
              >
                Get Template
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: 'rgb(228, 254, 123)',
                  filter: 'blur(10px)',
                }}
              />
            </div>
            <div
              className="h-full px-4 flex items-center justify-center border-l"
              style={{
                backgroundColor: 'rgb(228, 254, 123)',
                borderColor: 'rgba(0, 0, 0, 0.2)',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="rgb(15, 43, 44)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  label,
  isFirst,
}: {
  href: string;
  label: string;
  isFirst: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative h-full px-6 flex items-center justify-center border-r border-white/15 transition-colors duration-300 hover:bg-white/5"
      style={{
        borderLeft: isFirst ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute left-1/2 top-0 h-full w-px pointer-events-none"
        style={{ transform: 'translateX(-50%)' }}
      >
        <div
          className="absolute top-0 left-0 w-px transition-all duration-300"
          style={{
            backgroundColor: 'rgb(255, 255, 255)',
            height: isHovered ? '100%' : '0%',
            transformOrigin: 'top',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-px transition-all duration-300"
          style={{
            backgroundColor: 'rgb(255, 255, 255)',
            height: isHovered ? '100%' : '0%',
            transformOrigin: 'bottom',
          }}
        />
      </div>
      <span
        className="relative z-10 text-[15px] font-normal tracking-wide transition-colors duration-300"
        style={{
          color: isHovered ? 'rgb(253, 252, 238)' : 'rgb(253, 252, 238)',
        }}
      >
        {label}
      </span>
    </Link>
  );
}
