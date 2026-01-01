'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MediaDisplayProps {
  images: string[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

export const MediaDisplay: React.FC<MediaDisplayProps> = ({
  images,
  activeIndex,
  onIndexChange,
}) => {
  const nextImage = () => {
    onIndexChange((activeIndex + 1) % images.length);
  };

  const prevImage = () => {
    onIndexChange((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Main Image Display */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 9',
          background: '#0a3410',
          border: '4px solid #FFD60A',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '16px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
        }}
      >
        {/* Image Counter */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            padding: '8px 16px',
            background: 'rgba(15,79,22,0.9)',
            border: '2px solid #FFD60A',
            borderRadius: '4px',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '12px',
            color: '#FFD60A',
            fontWeight: 'bold',
            zIndex: 10,
          }}
        >
          SELECT ({activeIndex + 1}/{images.length} ↓)
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            {/* Previous Arrow */}
            <motion.button
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                background: 'rgba(15,79,22,0.8)',
                border: '2px solid #FFD60A',
                borderRadius: '50%',
                color: '#FFD60A',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
              whileHover={{
                scale: 1.1,
                background: 'rgba(15,79,22,0.95)',
                boxShadow: '0 0 16px rgba(255,214,10,0.5)',
              }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
            >
              ‹
            </motion.button>

            {/* Next Arrow */}
            <motion.button
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                background: 'rgba(15,79,22,0.8)',
                border: '2px solid #FFD60A',
                borderRadius: '50%',
                color: '#FFD60A',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
              whileHover={{
                scale: 1.1,
                background: 'rgba(15,79,22,0.95)',
                boxShadow: '0 0 16px rgba(255,214,10,0.5)',
              }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
            >
              ›
            </motion.button>
          </>
        )}

        {/* Main Image with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            style={{
              width: '100%',
              height: '100%',
              background: images[activeIndex],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div
          style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            padding: '8px 0',
            scrollBehavior: 'smooth',
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              style={{
                width: '100px',
                height: '60px',
                background: image,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: activeIndex === index ? '3px solid #FFD60A' : '3px solid #0a3410',
                borderRadius: '6px',
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow:
                  activeIndex === index
                    ? '0 0 12px rgba(255,214,10,0.6)'
                    : '0 2px 4px rgba(0,0,0,0.3)',
              }}
              whileHover={{
                scale: 1.1,
                borderColor: '#FFD60A',
                boxShadow: '0 0 12px rgba(255,214,10,0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onIndexChange(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
