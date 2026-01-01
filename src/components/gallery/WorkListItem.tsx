'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types/gallery';

interface WorkListItemProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

export const WorkListItem: React.FC<WorkListItemProps> = ({
  project,
  isSelected,
  onClick,
}) => {
  const categoryColors: Record<string, string> = {
    design: '#4facfe',
    '3d': '#f093fb',
    webdev: '#43e97b',
  };

  return (
    <motion.div
      style={{
        padding: '16px',
        background: isSelected ? '#E63946' : 'transparent',
        borderLeft: isSelected ? '4px solid #FFD60A' : '4px solid transparent',
        borderBottom: '1px solid rgba(255,214,10,0.2)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      whileHover={{
        background: isSelected ? '#E63946' : 'rgba(255,214,10,0.1)',
        boxShadow: '0 0 12px rgba(255,214,10,0.2)',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* Category Badge */}
      <div
        style={{
          display: 'inline-block',
          padding: '3px 8px',
          background: categoryColors[project.category],
          borderRadius: '3px',
          fontSize: '9px',
          fontWeight: 'bold',
          color: '#0f4f16',
          marginBottom: '8px',
          fontFamily: 'var(--font-geist-mono)',
          textTransform: 'uppercase',
        }}
      >
        {project.category}
      </div>

      {/* Title Row with Dotted Leader */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '6px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-rampart-one)',
            fontSize: '16px',
            fontWeight: 'bold',
            color: isSelected ? '#FFFFFF' : '#FFE4B5',
            whiteSpace: 'nowrap',
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            flex: 1,
            height: '1px',
            borderBottom: '2px dotted rgba(255,214,10,0.3)',
          }}
        />
        <div
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '11px',
            color: isSelected ? '#FFD60A' : '#E8E8E8',
            whiteSpace: 'nowrap',
          }}
        >
          {project.year}
        </div>
      </div>

      {/* Japanese Title */}
      {project.titleJP && (
        <div
          style={{
            fontFamily: 'var(--font-mplus-rounded)',
            fontSize: '12px',
            color: isSelected ? 'rgba(255,255,255,0.8)' : 'rgba(232,232,232,0.7)',
          }}
        >
          {project.titleJP}
        </div>
      )}
    </motion.div>
  );
};
