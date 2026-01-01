'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlitchText } from '@/components/RetroEffects';

interface ProjectHeaderProps {
  title: string;
  titleJP?: string;
  year: string;
  tags: string[];
  description: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  titleJP,
  year,
  tags,
  description,
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Japanese Title */}
      {titleJP && (
        <motion.div
          style={{
            fontFamily: 'var(--font-mplus-rounded)',
            fontSize: '18px',
            color: '#FF6347',
            marginBottom: '8px',
            fontWeight: 'bold',
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {titleJP}
        </motion.div>
      )}

      {/* Main Title with Glitch Effect */}
      <motion.div
        onMouseEnter={() => setIsGlitching(true)}
        onMouseLeave={() => setIsGlitching(false)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <GlitchText
          isActive={isGlitching}
          style={{
            fontFamily: 'var(--font-rampart-one)',
            fontSize: '36px',
            color: '#2A2A2A',
            marginBottom: '16px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            display: 'inline-block',
          }}
        >
          {title}
        </GlitchText>
      </motion.div>

      {/* Metadata Row */}
      <motion.div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          marginBottom: '16px',
          flexWrap: 'wrap',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Year Badge */}
        <div
          style={{
            padding: '6px 12px',
            background: '#FF6347',
            borderRadius: '6px',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}
        >
          YEAR: {year}
        </div>

        {/* Tags */}
        {tags.map((tag, index) => (
          <div
            key={index}
            style={{
              padding: '6px 12px',
              background: '#F0F0F0',
              border: '2px solid #CCCCCC',
              borderRadius: '6px',
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '11px',
              fontWeight: 'bold',
              color: '#666666',
            }}
          >
            {tag}
          </div>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        style={{
          fontFamily: 'var(--font-mplus-rounded)',
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#333333',
          marginBottom: '24px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {description}
      </motion.p>
    </div>
  );
};
