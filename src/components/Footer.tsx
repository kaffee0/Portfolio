'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="mt-auto"
      style={{
        background: '#0f4f16',
        borderTop: '4px solid #FFD60A',
        boxShadow: '0 -4px 12px rgba(0,0,0,0.6)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="max-w-[2000px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* ロゴ */}
          <motion.div
            className="text-center md:text-left"
            whileHover={{ scale: 1.05 }}
          >
            <h2
              className="font-black mb-2"
              style={{
                fontFamily: 'var(--font-rampart-one)',
                fontSize: '28px',
                color: '#FFD60A',
                textShadow: `
                  0 0 10px #FFD60A,
                  0 0 20px #FFD60A,
                  -2px -2px 0 #0a3410,
                  2px -2px 0 #0a3410,
                  -2px 2px 0 #0a3410,
                  2px 2px 0 #0a3410
                `,
                letterSpacing: '2px',
              }}
            >
              Portfolio
            </h2>
            <p
              className="text-sm font-bold"
              style={{
                fontFamily: 'var(--font-mplus-rounded)',
                color: '#E8E8E8',
              }}
            >
              台湾レトロポートフォリオ
            </p>
          </motion.div>

          {/* ソーシャルリンク - レトロボタン */}
          <div className="flex gap-4">
            {[
              { label: 'GitHub', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'Email', href: '#' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="px-6 py-3 font-bold text-sm"
                style={{
                  fontFamily: 'var(--font-rampart-one)',
                  background: 'linear-gradient(180deg, #1a7f28 0%, #0f4f16 100%)',
                  color: '#FFD60A',
                  border: '3px solid #FFD60A',
                  borderRadius: '8px',
                  boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.2)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                }}
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
                  background: 'linear-gradient(180deg, #22963a 0%, #1a7f28 100%)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* 装飾ライン */}
        <div
          className="my-6"
          style={{
            height: '3px',
            background: 'repeating-linear-gradient(90deg, #FFD60A 0px, #FFD60A 10px, transparent 10px, transparent 20px)',
            opacity: 0.5,
          }}
        />

        {/* コピーライト */}
        <div className="text-center">
          <p
            className="text-xs font-bold"
            style={{
              fontFamily: 'var(--font-mplus-rounded)',
              color: '#E8E8E8',
            }}
          >
            © 2025 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
