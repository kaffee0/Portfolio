'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '@/types/gallery';
import { RippleEffect } from '@/components/RetroEffects';

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'ALL' },
    { value: 'design', label: 'DESIGN/UI-UX' },
    { value: '3d', label: '3D/ART' },
    { value: 'webdev', label: 'WEB DEV' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        padding: '16px',
        background: '#FFFFFF',
        borderBottom: '2px solid #CCCCCC',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          color: '#666666',
          alignSelf: 'center',
          marginRight: '8px',
          fontFamily: 'var(--font-geist-mono)',
        }}
      >
        SORT (Control)
      </div>

      {categories.map((category) => (
        <RippleEffect key={category.value} color="#FF6347">
          <motion.button
            style={{
              padding: '8px 16px',
              background:
                activeCategory === category.value
                  ? '#FF6347'
                  : '#F0F0F0',
              border: `2px solid ${
                activeCategory === category.value ? '#FF6347' : '#CCCCCC'
              }`,
              borderRadius: '4px',
              color:
                activeCategory === category.value ? '#FFFFFF' : '#2A2A2A',
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '11px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow:
                activeCategory === category.value
                  ? '0 2px 6px rgba(255,99,71,0.3)'
                  : '0 1px 3px rgba(0,0,0,0.1)',
            }}
            whileHover={{
              scale: 1.05,
              borderColor: activeCategory === category.value ? '#FF6347' : '#FFD60A',
              boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category.value)}
          >
            {category.label}
          </motion.button>
        </RippleEffect>
      ))}
    </div>
  );
};
