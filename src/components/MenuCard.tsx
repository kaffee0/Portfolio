'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MenuCardProps {
  title: string;
  kanji: string;
  price: string;
  imageUrl?: string;
  starColor: 'yellow' | 'blue' | 'red';
  sour: number;
  sweet: number;
  salt: number;
  spicy: number;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  title,
  kanji,
  price,
  imageUrl,
  starColor,
  sour,
  sweet,
  salt,
  spicy,
}) => {
  const starColors = {
    yellow: { main: '#D4A574', glow: '#C89B5C' },
    blue: { main: '#8B9474', glow: '#6B7456' },
    red: { main: '#A85C4A', glow: '#C97B63' },
  };

  const cardBackgrounds = {
    yellow: 'linear-gradient(135deg, #E8D5C4 0%, #D4C5B0 50%, #C8B79C 100%)',
    blue: 'linear-gradient(135deg, #D4C5B0 0%, #C0B298 50%, #A89E88 100%)',
    red: 'linear-gradient(135deg, #D8BFB0 0%, #C8A898 50%, #B89080 100%)',
  };

  return (
    <motion.div
      className="relative overflow-hidden"
      style={{
        aspectRatio: '406/535',
        width: '100%',
        background: cardBackgrounds[starColor],
        padding: '20px',
        border: '4px solid #8B6F47',
        borderRadius: '12px',
        boxShadow: `
          0 8px 16px rgba(0,0,0,0.4),
          inset 0 1px 0 rgba(255,255,255,0.1),
          inset 0 -2px 4px rgba(0,0,0,0.2)
        `,
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        boxShadow: `
          0 16px 32px rgba(0,0,0,0.5),
          inset 0 1px 0 rgba(255,255,255,0.15),
          inset 0 -2px 4px rgba(0,0,0,0.25)
        `,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* ヴィンテージテクスチャオーバーレイ */}
      <div
        className="absolute inset-0"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 2px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
          {/* タイトル - レトロサイン風 */}
          <div className="mb-3">
            <h3
              className="font-black leading-tight"
              style={{
                fontFamily: 'var(--font-rampart-one)',
                fontSize: '18px',
                color: '#FFE4B5',
                textShadow: `
                  0 0 8px #D4A574,
                  0 0 12px #C89B5C,
                  -2px -2px 0 #5A4A2F,
                  2px -2px 0 #5A4A2F,
                  -2px 2px 0 #5A4A2F,
                  2px 2px 0 #5A4A2F
                `,
                letterSpacing: '1px',
              }}
            >
              {title}
            </h3>
            <p
              className="font-black leading-tight mt-1"
              style={{
                fontFamily: 'var(--font-mplus-rounded)',
                fontSize: '14px',
                color: '#8B6F47',
                textShadow: '1px 1px 1px rgba(255,255,255,0.3)',
              }}
            >
              {kanji}
            </p>
          </div>

          {/* 画像エリア - ヴィンテージフレーム */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              flex: '0 0 auto',
              background: 'linear-gradient(135deg, #6B5638 0%, #5A4A2F 100%)',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '180px',
              border: '3px solid #8B6F47',
              borderRadius: '8px',
              boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {/* スターバースト - レトロスタイル */}
            <motion.div
              className="absolute z-10"
              style={{
                width: '70px',
                height: '70px',
                top: '30px',
                left: '15px',
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))',
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <filter id={`vintage-glow-${starColor}`}>
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <polygon
                  points="50,10 60,40 90,40 65,60 75,90 50,70 25,90 35,60 10,40 40,40"
                  fill={starColors[starColor].main}
                  stroke="#5A4A2F"
                  strokeWidth="3"
                  filter={`url(#vintage-glow-${starColor})`}
                />
              </svg>
            </motion.div>

            {/* 料理画像エリア */}
            <div
              className="relative"
              style={{
                width: '140px',
                height: '140px',
                background: imageUrl ? '#E8D5C4' : 'rgba(232,213,196,0.3)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '2px solid #8B6F47',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'sepia(0.2) contrast(1.1) brightness(0.95)',
                  }}
                />
              )}
            </div>
          </div>

          {/* 味覚バー - レトロメーター */}
          <div className="space-y-2 mt-4">
            <FlavorBar label="■酸味" value={sour} color="#D4A574" />
            <FlavorBar label="■甘味" value={sweet} color="#C97B63" />
            <FlavorBar label="■塩味" value={salt} color="#8B9474" />
            <FlavorBar label="■辛味" value={spicy} color="#A85C4A" />
          </div>
        </div>
    </motion.div>
  );
};

interface FlavorBarProps {
  label: string;
  value: number;
  color: string;
}

const FlavorBar: React.FC<FlavorBarProps> = ({ label, value, color }) => {
  return (
    <div className="flex items-center gap-2">
      <span
        className="text-[11px] font-bold"
        style={{
          color: '#5A4A2F',
          minWidth: '45px',
          fontFamily: 'var(--font-rampart-one)',
          textShadow: '1px 1px 1px rgba(255,255,255,0.3)',
        }}
      >
        {label}
      </span>
      <div
        className="flex-1 h-3 rounded overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #5A4A2F 0%, #4A3A1F 100%)',
          border: '2px solid #8B6F47',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
        }}
      >
        <motion.div
          className="h-full"
          style={{
            background: `linear-gradient(90deg, ${color} 0%, ${color}dd 100%)`,
            boxShadow: `inset 0 1px 2px rgba(255,255,255,0.2), 0 0 4px ${color}`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut"
          }}
        />
      </div>
      <span
        className="text-[10px] font-bold min-w-[30px] text-right"
        style={{
          color: '#6B5638',
          fontFamily: 'var(--font-mplus-rounded)',
        }}
      >
        {value}
      </span>
    </div>
  );
};
