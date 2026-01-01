'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project, Category } from '@/types/gallery';
import { CategoryFilter } from './CategoryFilter';
import { WorkGridItem } from './WorkGridItem';

interface CenterPanelProps {
  projects: Project[];
  selectedId: string | null;
  onSelectProject: (id: string) => void;
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const CenterPanel: React.FC<CenterPanelProps> = ({
  projects,
  selectedId,
  onSelectProject,
  activeCategory,
  onCategoryChange,
}) => {
  // Filter projects by category
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div
      style={{
        width: '400px',
        height: '100vh',
        background: '#E8E8E8',
        borderRight: '2px solid #CCCCCC',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Category Filter */}
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />

      {/* Works Count Header */}
      <div
        style={{
          padding: '12px 16px',
          background: '#FFFFFF',
          borderBottom: '2px solid #CCCCCC',
          fontFamily: 'var(--font-geist-mono)',
          fontSize: '11px',
          color: '#2A2A2A',
          fontWeight: 'bold',
        }}
      >
        WORKS (All {filteredProjects.length} ←→)
      </div>

      {/* Numbered Grid - Scrollable */}
      <motion.div
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '16px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '8px',
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <WorkGridItem
                number={index + 1}
                projectId={project.id}
                isSelected={selectedId === project.id}
                onClick={() => onSelectProject(project.id)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
