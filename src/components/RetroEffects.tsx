'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. リップルエフェクトコンポーネント
interface RippleProps {
  children: React.ReactNode;
  color?: string;
}

export const RippleEffect: React.FC<RippleProps> = ({ children, color = '#FFD60A' }) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const addRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <div
      className="relative overflow-hidden"
      onClick={addRipple}
      style={{ cursor: 'pointer' }}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              border: `3px solid ${color}`,
              backgroundColor: `${color}20`,
            }}
            initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              width: 400,
              height: 400,
              x: -200,
              y: -200,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// 2. ストライプモーフィング背景
interface StripeMorphProps {
  colors?: string[];
  stripeWidth?: number;
}

export const StripeMorphBackground: React.FC<StripeMorphProps> = ({
  colors = ['#FF0000', '#FFD60A', '#2D9134'],
  stripeWidth = 20,
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            ${colors[0]} 0px,
            ${colors[0]} ${stripeWidth}px,
            ${colors[1]} ${stripeWidth}px,
            ${colors[1]} ${stripeWidth * 2}px,
            ${colors[2]} ${stripeWidth * 2}px,
            ${colors[2]} ${stripeWidth * 3}px
          )`,
          opacity: 0.15,
        }}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            ${colors[2]} 0px,
            ${colors[2]} ${stripeWidth}px,
            ${colors[0]} ${stripeWidth}px,
            ${colors[0]} ${stripeWidth * 2}px,
            ${colors[1]} ${stripeWidth * 2}px,
            ${colors[1]} ${stripeWidth * 3}px
          )`,
          opacity: 0.1,
        }}
        animate={{
          rotate: [360, 270, 180, 90, 0],
          scale: [1, 0.8, 1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

// 3. カラーサイクル背景
interface ColorCycleProps {
  colors?: string[];
  duration?: number;
}

export const ColorCycleBackground: React.FC<ColorCycleProps> = ({
  colors = ['#E8D5C4', '#2D9134', '#E63946', '#0077B6', '#FFD60A'],
  duration = 10,
}) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [colors.length, duration]);

  return (
    <motion.div
      className="absolute inset-0"
      animate={{
        backgroundColor: colors[colorIndex],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
    />
  );
};

// 4. CMYKグリッチエフェクト（ホバー用）
interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  className = '',
  style = {},
  isActive = false,
}) => {
  return (
    <div className={`relative inline-block ${className}`} style={style}>
      {/* Original text */}
      <div className="relative z-10">{children}</div>

      {/* Cyan channel */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          color: '#00FFFF',
          mixBlendMode: 'screen',
        }}
        animate={
          isActive
            ? {
                x: [-2, 2, -2, 2, 0],
                y: [1, -1, 1, -1, 0],
              }
            : { x: 0, y: 0 }
        }
        transition={{
          duration: 0.3,
          repeat: isActive ? Infinity : 0,
          repeatDelay: 0.1,
        }}
      >
        {children}
      </motion.div>

      {/* Magenta channel */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          color: '#FF00FF',
          mixBlendMode: 'screen',
        }}
        animate={
          isActive
            ? {
                x: [2, -2, 2, -2, 0],
                y: [-1, 1, -1, 1, 0],
              }
            : { x: 0, y: 0 }
        }
        transition={{
          duration: 0.3,
          repeat: isActive ? Infinity : 0,
          repeatDelay: 0.1,
          delay: 0.05,
        }}
      >
        {children}
      </motion.div>

      {/* Yellow channel */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          color: '#FFFF00',
          mixBlendMode: 'screen',
        }}
        animate={
          isActive
            ? {
                x: [1, -1, 1, -1, 0],
                y: [2, -2, 2, -2, 0],
              }
            : { x: 0, y: 0 }
        }
        transition={{
          duration: 0.3,
          repeat: isActive ? Infinity : 0,
          repeatDelay: 0.1,
          delay: 0.1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// 5. スタンプアニメーション用のラッパー
interface StampAnimationProps {
  children: React.ReactNode;
  delay?: number;
  rotation?: number;
}

export const StampAnimation: React.FC<StampAnimationProps> = ({
  children,
  delay = 0,
  rotation = -5,
}) => {
  return (
    <motion.div
      initial={{
        scale: 0,
        rotate: rotation,
        opacity: 0,
      }}
      animate={{
        scale: [0, 1.2, 0.95, 1.05, 1],
        rotate: [rotation, rotation + 10, rotation - 5, 0],
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.34, 1.56, 0.64, 1], // バウンシーイージング
      }}
      whileHover={{
        scale: 1.05,
        rotate: -3,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};
