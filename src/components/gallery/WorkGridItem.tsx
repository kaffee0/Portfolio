'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WorkGridItemProps {
  number: number;
  projectId: string;
  isSelected: boolean;
  onClick: () => void;
}

export const WorkGridItem: React.FC<WorkGridItemProps> = ({
  number,
  isSelected,
  onClick,
}) => {
  return (
    <motion.div
      style={{
        aspectRatio: '1 / 1',
        background: isSelected ? '#FF6347' : '#FFFFFF',
        border: `2px solid ${isSelected ? '#FF6347' : '#CCCCCC'}`,
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontFamily: 'var(--font-geist-mono)',
        fontSize: '18px',
        fontWeight: 'bold',
        color: isSelected ? '#FFFFFF' : '#2A2A2A',
        transition: 'all 0.2s ease',
        boxShadow: isSelected ? '0 2px 8px rgba(255,99,71,0.4)' : '0 1px 3px rgba(0,0,0,0.1)',
      }}
      whileHover={{
        scale: 1.05,
        borderColor: '#FFD60A',
        boxShadow: '0 4px 12px rgba(255,214,10,0.3)',
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {number}
    </motion.div>
  );
};
