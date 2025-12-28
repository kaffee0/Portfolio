'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MenuCardProps {
  title: string;
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
  price,
  imageUrl,
  starColor,
  sour,
  sweet,
  salt,
  spicy,
}) => {
  const starColors = {
    yellow: '#FFD700',
    blue: '#00BFFF',
    red: '#FF4500',
  };

  const borderColors = {
    yellow: '#FFD700',
    blue: '#00BFFF',
    red: '#FF4500',
  };

  return (
    <motion.div
      className="relative overflow-hidden h-full"
      style={{
        background: 'linear-gradient(to bottom, #C0C0C0 0%, #E8E8E8 100%)',
        border: `6px solid ${borderColors[starColor]}`,
        borderRadius: '8px',
        padding: '8px',
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        rotate: [0, -1, 1, -1, 0],
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* グリーンタイル背景 */}
      <div
        className="taiwan-tile-bg relative overflow-hidden"
        style={{
          borderRadius: '4px',
          padding: '12px',
        }}
      >
        {/* スターバースト */}
        <motion.div
          className="absolute top-4 left-4 z-10"
          style={{
            width: '80px',
            height: '80px',
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
            <polygon
              points="50,10 60,40 90,40 65,60 75,90 50,70 25,90 35,60 10,40 40,40"
              fill={starColors[starColor]}
              stroke={starColor === 'yellow' ? '#FFA500' : starColors[starColor]}
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* 料理画像エリア */}
        <div
          className="relative mx-auto mb-3"
          style={{
            width: '140px',
            height: '140px',
            background: imageUrl ? 'transparent' : 'rgba(255,255,255,0.3)',
            borderRadius: '8px',
            border: '3px solid rgba(255,255,255,0.5)',
          }}
        >
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded"
            />
          )}
        </div>

        {/* タイトル */}
        <h3
          className="font-black text-center mb-2 leading-tight"
          style={{
            fontFamily: 'var(--font-rampart-one)',
            fontSize: '18px',
            color: '#FF0000',
            textShadow: '-1px -1px 0 #FFD700, 1px -1px 0 #FFD700, -1px 1px 0 #FFD700, 1px 1px 0 #FFD700',
            letterSpacing: '0.5px',
          }}
        >
          {title}
        </h3>

        {/* 価格 */}
        <div
          className="text-center font-black mb-3"
          style={{
            fontSize: '20px',
            color: '#FF0000',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          {price}
        </div>

        {/* 味覚バー */}
        <div className="space-y-1">
          <FlavorBar label="Sour" value={sour} color="#FFD700" />
          <FlavorBar label="Sweet" value={sweet} color="#FF6B35" />
          <FlavorBar label="Salt" value={salt} color="#FF4500" />
          <FlavorBar label="Spicy" value={spicy} color="#D32F2F" />
        </div>

        {/* RECOMMENDEDバッジ */}
        <motion.div
          className="mt-2 text-center text-xs font-bold"
          style={{ color: '#006400' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ✓ RECOMMENDED
        </motion.div>
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
        className="text-xs font-bold"
        style={{
          color: '#FF0000',
          minWidth: '45px',
          textShadow: '1px 1px 0px rgba(255,255,255,0.5)',
        }}
      >
        ■{label}
      </span>
      <div
        className="flex-1 h-2 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.3)' }}
      >
        <motion.div
          className="h-full"
          style={{
            background: color,
            boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
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
    </div>
  );
};
