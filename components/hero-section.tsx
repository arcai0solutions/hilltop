'use client';

import { useEffect, useRef } from 'react';

const profileImages = [
  'https://framerusercontent.com/images/ixk018jjex9WXgKnDtZ4f20EWhs.png',
  'https://framerusercontent.com/images/Okq6VCoHP2eneySzv9IsnnSYrNA.png',
  'https://framerusercontent.com/images/KXks0zy7q42U6LOea9SAqLzzaHY.png',
  'https://framerusercontent.com/images/KjaJ8FHi1nwYkcmLFXFmrDcR4.png',
  'https://framerusercontent.com/images/dMDIh55Bisowcxbv9xC0Gejc5hE.png',
];

const stats = [
  '💼 $5M+ IN CLIENT REVENUE GENERATED',
  '🚀 200+ BUSINESSES LAUNCHED',
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://framerusercontent.com/images/Q94oslWo6RLM85eXJ5lNnH2FMc.jpg"
          alt="Business meeting"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1400px] px-8 pt-40 pb-20 min-h-screen flex items-center">
        <div className="w-full flex justify-between items-center gap-16">
          <div className="flex-1 max-w-[700px]">
            <ProfileImages />
            <StatsTicker />

            <h1 className="text-[72px] leading-[1.1] font-bold text-white mb-10">
              We <span style={{ color: 'rgb(228, 254, 123)' }}>think</span>, you{' '}
              <span style={{ color: 'rgb(228, 254, 123)' }}>grow</span>
              <br />— that's the deal
            </h1>

            <div className="flex">
              <a
                href="https://www.framer.com/marketplace/templates/agevia/?via=realmehedi1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center h-[52px] overflow-hidden rounded-md"
              >
                <div
                  className="relative px-7 py-3 transition-all duration-300"
                  style={{ backgroundColor: 'rgb(228, 254, 123)' }}
                >
                  <span
                    className="relative z-10 font-medium text-[16px] whitespace-nowrap"
                    style={{ color: 'rgb(15, 43, 44)' }}
                  >
                    Buy Template
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

          <div className="flex-shrink-0 max-w-[450px]">
            <p className="text-[20px] leading-[1.7] text-right" style={{ color: 'rgb(228, 254, 123)' }}>
              We take your big ideas and turn them into clear, winning strategies. From setting up
              your company to scaling it worldwide, we're here every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileImages() {
  return (
    <div className="flex gap-3 mb-6">
      {profileImages.map((src, index) => (
        <div
          key={index}
          className="w-[56px] h-[56px] rounded-full overflow-hidden relative"
          style={{
            backgroundColor: 'rgb(12, 31, 26)',
            padding: '3px',
          }}
        >
          <div
            className="w-full h-full rounded-full overflow-hidden relative"
            style={{
              backgroundColor: 'rgb(228, 254, 123)',
              padding: '3px',
            }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{
                filter: 'grayscale(1)',
              }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollAmount += scrollSpeed;
      if (ticker.scrollWidth && scrollAmount >= ticker.scrollWidth / 2) {
        scrollAmount = 0;
      }
      ticker.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      className="relative w-full max-w-[600px] h-[40px] overflow-hidden mb-10"
      style={{
        maskImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
      }}
    >
      <div ref={tickerRef} className="flex gap-4 whitespace-nowrap absolute">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex gap-4">
            {stats.map((stat, j) => (
              <div
                key={j}
                className="flex items-center gap-2"
                style={{ color: 'rgb(226, 252, 122)' }}
              >
                <p className="text-[13px] font-medium tracking-wide">{stat}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
