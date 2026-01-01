'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project, Tab } from '@/types/gallery';
import { ProjectHeader } from './ProjectHeader';
import { TabNavigation } from './TabNavigation';
import { MediaDisplay } from './MediaDisplay';

interface RightPanelProps {
  project: Project | null;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  activeImageIndex: number;
  onImageChange: (index: number) => void;
}

export const RightPanel: React.FC<RightPanelProps> = ({
  project,
  activeTab,
  onTabChange,
  activeImageIndex,
  onImageChange,
}) => {
  if (!project) {
    return (
      <div
        style={{
          flex: 1,
          height: '100vh',
          background: '#F5F5DC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-rampart-one)',
            fontSize: '32px',
            color: '#FF6347',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Select a project
        </div>
      </div>
    );
  }

  return (
    <motion.div
      key={project.id}
      style={{
        flex: 1,
        height: '100vh',
        background: '#F5F5DC',
        padding: '32px',
        overflowY: 'auto',
      }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Header */}
      <ProjectHeader
        title={project.title}
        titleJP={project.titleJP}
        year={project.year}
        tags={project.tags}
        description={project.description}
      />

      {/* Tab Navigation */}
      <TabNavigation
        activeTab={activeTab}
        onTabChange={onTabChange}
        imageCount={project.images.length}
        videoCount={project.videos?.length || 0}
      />

      {/* Tab Content */}
      <div>
        {activeTab === 'images' && (
          <MediaDisplay
            images={project.images}
            activeIndex={activeImageIndex}
            onIndexChange={onImageChange}
          />
        )}

        {activeTab === 'videos' && (
          <div
            style={{
              padding: '40px',
              textAlign: 'center',
              fontFamily: 'var(--font-mplus-rounded)',
              fontSize: '18px',
              color: '#E8E8E8',
            }}
          >
            {project.videos && project.videos.length > 0 ? (
              <div>
                <p>Video content coming soon!</p>
                <p style={{ fontSize: '14px', marginTop: '8px', opacity: 0.7 }}>
                  ({project.videos.length} video{project.videos.length > 1 ? 's' : ''} available)
                </p>
              </div>
            ) : (
              <p>No videos available for this project.</p>
            )}
          </div>
        )}

        {activeTab === 'credit' && (
          <motion.div
            style={{
              padding: '24px',
              background: 'rgba(10,52,16,0.3)',
              border: '2px solid rgba(255,214,10,0.3)',
              borderRadius: '8px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.credits && project.credits.length > 0 ? (
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-rampart-one)',
                    fontSize: '24px',
                    color: '#FFD60A',
                    marginBottom: '20px',
                  }}
                >
                  Credits
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {project.credits.map((credit, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '12px',
                        background: 'rgba(255,214,10,0.05)',
                        borderRadius: '6px',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-geist-mono)',
                          fontSize: '11px',
                          color: '#FFD60A',
                          fontWeight: 'bold',
                          minWidth: '120px',
                        }}
                      >
                        {credit.role}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mplus-rounded)',
                          fontSize: '14px',
                          color: '#E8E8E8',
                        }}
                      >
                        {credit.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  fontFamily: 'var(--font-mplus-rounded)',
                  fontSize: '16px',
                  color: '#E8E8E8',
                  padding: '20px',
                }}
              >
                No credits available for this project.
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
