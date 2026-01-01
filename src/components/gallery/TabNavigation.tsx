'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@/types/gallery';

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  imageCount: number;
  videoCount: number;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
  imageCount,
  videoCount,
}) => {
  const tabs: { value: Tab; label: string; count?: number }[] = [
    { value: 'images', label: 'IMAGES', count: imageCount },
    { value: 'videos', label: 'VIDEOS', count: videoCount },
    { value: 'credit', label: 'CREDIT' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '20px',
        borderBottom: '2px solid rgba(255,214,10,0.3)',
        paddingBottom: '8px',
      }}
    >
      {tabs.map((tab) => (
        <motion.button
          key={tab.value}
          style={{
            padding: '10px 20px',
            background:
              activeTab === tab.value ? '#FFD60A' : 'rgba(255,214,10,0.1)',
            border: `2px solid ${
              activeTab === tab.value ? '#FFD60A' : 'rgba(255,214,10,0.3)'
            }`,
            borderRadius: '6px 6px 0 0',
            borderBottom: 'none',
            color: activeTab === tab.value ? '#0f4f16' : '#E8E8E8',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            position: 'relative',
            bottom: '-2px',
          }}
          whileHover={{
            background:
              activeTab === tab.value
                ? '#FFD60A'
                : 'rgba(255,214,10,0.2)',
            borderColor: '#FFD60A',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
          {tab.count !== undefined && ` (${tab.count})`}
        </motion.button>
      ))}
    </div>
  );
};
