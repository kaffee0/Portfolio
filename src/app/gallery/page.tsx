'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Category, Tab } from '@/types/gallery';
import { projects } from '@/data/projects';
import { LeftSidebar } from '@/components/gallery/LeftSidebar';
import { CenterPanel } from '@/components/gallery/CenterPanel';
import { RightPanel } from '@/components/gallery/RightPanel';
import { StripeMorphBackground } from '@/components/RetroEffects';

export default function Gallery() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(projects[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [activeTab, setActiveTab] = useState<Tab>('images');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Get selected project
  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  // Reset image index when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedProjectId]);

  // Reset to images tab when project changes
  useEffect(() => {
    setActiveTab('images');
  }, [selectedProjectId]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle Stripe Morphing Background */}
      <StripeMorphBackground
        colors={['#4a8a2e', '#5a9a3e', '#6aaa4e']}
        stripeWidth={40}
      />

      {/* Vintage Noise Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 2px, transparent 2px, transparent 4px)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />

      {/* Three-Panel Layout */}
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: '280px 400px 1fr',
          height: '100vh',
          position: 'relative',
          zIndex: 10,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <LeftSidebar />
        </motion.div>

        {/* Center Panel */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CenterPanel
            projects={projects}
            selectedId={selectedProjectId}
            onSelectProject={setSelectedProjectId}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Right Panel */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <RightPanel
            project={selectedProject}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            activeImageIndex={activeImageIndex}
            onImageChange={setActiveImageIndex}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
