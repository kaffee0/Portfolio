'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const LeftSidebar: React.FC = () => {
  const [mode, setMode] = useState<'index' | 'nums'>('index');
  const [noiseLevel, setNoiseLevel] = useState(50);
  const [glowLevel, setGlowLevel] = useState(75);

  return (
    <div
      style={{
        width: '280px',
        height: '100vh',
        background: '#2A2A2A',
        borderRight: '2px solid #FFD60A',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        fontFamily: 'var(--font-geist-mono)',
        color: '#FFD60A',
        overflow: 'auto',
      }}
    >
      {/* User Info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{
            fontSize: '14px',
            marginBottom: '8px',
            color: '#E8E8E8',
          }}
        >
          USER: <span style={{ color: '#FFD60A' }}>tsuchifumazu</span>
        </div>
        <div
          style={{
            fontSize: '14px',
            marginBottom: '8px',
            color: '#E8E8E8',
          }}
        >
          PAGE: <span style={{ color: '#FFD60A' }}>WORKS INDEX MODE</span>
        </div>
        <div
          style={{
            fontSize: '14px',
            marginBottom: '8px',
            color: '#E8E8E8',
          }}
        >
          SORT: <span style={{ color: '#FFD60A' }}>ALL WORKS</span>
        </div>
        <div
          style={{
            fontSize: '14px',
            color: '#E8E8E8',
          }}
        >
          SUMS = <span style={{ color: '#FFD60A' }}>10</span>
        </div>
      </motion.div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: '#FFD60A',
          opacity: 0.3,
        }}
      />

      {/* Page Menu */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          style={{
            fontSize: '12px',
            marginBottom: '12px',
            color: '#E8E8E8',
            opacity: 0.7,
          }}
        >
          PAGE MENU (Alt)
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Work Index Mode */}
          <motion.button
            style={{
              width: '100%',
              padding: '12px 16px',
              background: mode === 'index' ? '#E63946' : 'transparent',
              border: '2px solid #FFD60A',
              borderRadius: '4px',
              color: mode === 'index' ? '#FFFFFF' : '#FFD60A',
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              textAlign: 'left',
            }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 12px rgba(255,214,10,0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMode('index')}
          >
            WORK INDEX MODE
          </motion.button>

          {/* Work Nums Mode */}
          <motion.button
            style={{
              width: '100%',
              padding: '12px 16px',
              background: mode === 'nums' ? '#E63946' : 'transparent',
              border: '2px solid #FFD60A',
              borderRadius: '4px',
              color: mode === 'nums' ? '#FFFFFF' : '#FFD60A',
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              textAlign: 'left',
            }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 12px rgba(255,214,10,0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMode('nums')}
          >
            WORK NUMS MODE
          </motion.button>

        </div>
      </motion.div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: '#FFD60A',
          opacity: 0.3,
        }}
      />

      {/* Effects Controls */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div
          style={{
            fontSize: '12px',
            marginBottom: '16px',
            color: '#E8E8E8',
            opacity: 0.7,
          }}
        >
          EFFECTS
        </div>

        {/* Noise Control */}
        <div style={{ marginBottom: '20px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              fontSize: '11px',
            }}
          >
            <span style={{ color: '#E8E8E8' }}>NOISE</span>
            <span style={{ color: '#FFD60A', fontWeight: 'bold' }}>{noiseLevel}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={noiseLevel}
            onChange={(e) => setNoiseLevel(Number(e.target.value))}
            style={{
              width: '100%',
              height: '4px',
              background: '#0a3410',
              border: '1px solid #FFD60A',
              borderRadius: '2px',
              outline: 'none',
              cursor: 'pointer',
            }}
          />
        </div>

        {/* Glow Control */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              fontSize: '11px',
            }}
          >
            <span style={{ color: '#E8E8E8' }}>GLOW</span>
            <span style={{ color: '#FFD60A', fontWeight: 'bold' }}>{glowLevel}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={glowLevel}
            onChange={(e) => setGlowLevel(Number(e.target.value))}
            style={{
              width: '100%',
              height: '4px',
              background: '#0a3410',
              border: '1px solid #FFD60A',
              borderRadius: '2px',
              outline: 'none',
              cursor: 'pointer',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};
