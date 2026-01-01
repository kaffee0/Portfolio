'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'HOME', kanji: '首頁' },
    { href: '/gallery', label: 'GALLERY', kanji: '作品集' },
    { href: '/about', label: 'ABOUT', kanji: '關於' },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50"
      style={{
        background: '#0f4f16',
        borderBottom: '4px solid #FFD60A',
        boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[2000px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ - ネオンサイン風 */}
          <Link href="/">
            <motion.h1
              className="font-black cursor-pointer"
              style={{
                fontFamily: 'var(--font-rampart-one)',
                fontSize: '32px',
                color: '#FFD60A',
                textShadow: `
                  0 0 10px #FFD60A,
                  0 0 20px #FFD60A,
                  0 0 30px #FFA500,
                  -2px -2px 0 #0a3410,
                  2px -2px 0 #0a3410,
                  -2px 2px 0 #0a3410,
                  2px 2px 0 #0a3410
                `,
                letterSpacing: '2px',
              }}
              whileHover={{
                scale: 1.05,
                textShadow: `
                  0 0 15px #FFD60A,
                  0 0 30px #FFD60A,
                  0 0 45px #FFA500,
                  -2px -2px 0 #0a3410,
                  2px -2px 0 #0a3410,
                  -2px 2px 0 #0a3410,
                  2px 2px 0 #0a3410
                `,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.h1>
          </Link>

          {/* ナビゲーション - レトロボタン */}
          <nav className="flex gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className="text-center cursor-pointer px-5 py-3"
                    style={{
                      background: isActive
                        ? 'linear-gradient(180deg, #FFD60A 0%, #FFA500 100%)'
                        : 'linear-gradient(180deg, #1a7f28 0%, #0f4f16 100%)',
                      border: `3px solid ${isActive ? '#0a3410' : '#FFD60A'}`,
                      borderRadius: '8px',
                      boxShadow: isActive
                        ? 'inset 0 2px 4px rgba(255,228,181,0.3), 0 4px 8px rgba(0,0,0,0.3)'
                        : 'inset 0 -2px 4px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.2)',
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
                    }}
                    whileTap={{
                      scale: 0.98,
                      y: 0,
                    }}
                  >
                    <div
                      className="font-black text-sm"
                      style={{
                        fontFamily: 'var(--font-rampart-one)',
                        color: isActive ? '#0f4f16' : '#FFD60A',
                        textShadow: isActive
                          ? '1px 1px 2px rgba(15,79,22,0.3)'
                          : '1px 1px 2px rgba(0,0,0,0.5)',
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-[10px] font-bold mt-0.5"
                      style={{
                        fontFamily: 'var(--font-mplus-rounded)',
                        color: isActive ? '#156a1e' : '#E8E8E8',
                      }}
                    >
                      {item.kanji}
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
