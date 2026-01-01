import { Project } from '@/types/gallery';

// Gradient placeholder images
const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
];

export const projects: Project[] = [
  // Design/UI-UX Projects (3)
  {
    id: 'design-001',
    title: 'Taiwan Travel App',
    titleJP: '台灣旅行',
    category: 'design',
    year: '2024',
    description: 'モバイルアプリケーションのUI/UXデザイン。台湾の観光地を紹介するアプリで、レトロな雰囲気とモダンな機能性を融合させました。',
    tags: ['UI Design', 'Mobile', 'Travel'],
    images: [
      gradients[0],
      gradients[1],
      gradients[2],
      gradients[3],
    ],
    credits: [
      { role: 'UI/UX Design', name: 'Kae Feuring' },
      { role: 'Illustration', name: 'Design Team' },
    ],
  },
  {
    id: 'design-002',
    title: 'Retro Cafe Menu System',
    titleJP: '復古喫茶店',
    category: 'design',
    year: '2024',
    description: 'レトロカフェのブランディングとメニューシステム。1960年代の台湾カフェ文化にインスパイアされたデザイン。',
    tags: ['Branding', 'Print Design', 'Retro'],
    images: [
      gradients[4],
      gradients[5],
      gradients[6],
    ],
    credits: [
      { role: 'Art Direction', name: 'Kae Feuring' },
      { role: 'Graphic Design', name: 'Design Studio' },
    ],
  },
  {
    id: 'design-003',
    title: 'Green City Dashboard',
    titleJP: '緑の都市',
    category: 'design',
    year: '2023',
    description: '都市の環境データを可視化するダッシュボードデザイン。グリーンをテーマカラーに、見やすく美しいインターフェースを実現。',
    tags: ['Data Viz', 'Dashboard', 'Web Design'],
    images: [
      gradients[7],
      gradients[8],
      gradients[9],
      gradients[0],
      gradients[1],
    ],
    credits: [
      { role: 'UI Design', name: 'Kae Feuring' },
      { role: 'Data Visualization', name: 'Dev Team' },
    ],
  },

  // 3D/Art Projects (3)
  {
    id: '3d-001',
    title: 'Neon Night Market',
    titleJP: 'ネオン夜市',
    category: '3d',
    year: '2024',
    description: '台湾の夜市をモチーフにした3D環境デザイン。ネオンライトと懐かしい雰囲気を3Dで表現。',
    tags: ['3D Modeling', 'Environment', 'Neon'],
    images: [
      gradients[2],
      gradients[3],
      gradients[4],
    ],
    videos: ['video-placeholder-1.mp4'],
    credits: [
      { role: '3D Artist', name: 'Kae Feuring' },
      { role: 'Lighting', name: '3D Team' },
    ],
  },
  {
    id: '3d-002',
    title: 'Vintage Toy Collection',
    titleJP: '懐かしいおもちゃ',
    category: '3d',
    year: '2023',
    description: 'レトロなおもちゃのプロダクトレンダリング。昭和時代のおもちゃをフォトリアルに再現。',
    tags: ['Product Render', 'Vintage', 'Still Life'],
    images: [
      gradients[5],
      gradients[6],
      gradients[7],
      gradients[8],
    ],
    credits: [
      { role: '3D Modeling', name: 'Kae Feuring' },
      { role: 'Texturing', name: 'Art Team' },
    ],
  },
  {
    id: '3d-003',
    title: 'Taipei Street Scene',
    titleJP: '台北街景',
    category: '3d',
    year: '2024',
    description: '台北の街並みを3Dで再現したアーキテクチャビジュアライゼーション。レトロな建築と現代の風景が混在する台北の魅力を表現。',
    tags: ['Architecture', 'Urban', '3D Viz'],
    images: [
      gradients[9],
      gradients[0],
      gradients[1],
      gradients[2],
      gradients[3],
      gradients[4],
    ],
    videos: ['video-placeholder-2.mp4'],
    credits: [
      { role: 'Architectural Viz', name: 'Kae Feuring' },
      { role: '3D Modeling', name: 'Studio Team' },
    ],
  },

  // Web Development Projects (4)
  {
    id: 'web-001',
    title: 'E-commerce Platform',
    titleJP: 'EC通販サイト',
    category: 'webdev',
    year: '2024',
    description: 'Next.js と TypeScript で構築したフルスタックECプラットフォーム。レトロなUIと最新の技術スタックを融合。',
    tags: ['Next.js', 'TypeScript', 'E-commerce'],
    images: [
      gradients[6],
      gradients[7],
      gradients[8],
    ],
    credits: [
      { role: 'Full-stack Dev', name: 'Kae Feuring' },
      { role: 'Backend', name: 'Dev Team' },
    ],
  },
  {
    id: 'web-002',
    title: 'Portfolio Template',
    titleJP: 'ポートフォリオ',
    category: 'webdev',
    year: '2024',
    description: '静的サイトジェネレーターを使用したポートフォリオテンプレート。台湾レトロなデザインをベースにカスタマイズ可能。',
    tags: ['Static Site', 'Template', 'Portfolio'],
    images: [
      gradients[1],
      gradients[2],
      gradients[3],
      gradients[4],
    ],
    credits: [
      { role: 'Developer', name: 'Kae Feuring' },
      { role: 'Design', name: 'Design Team' },
    ],
  },
  {
    id: 'web-003',
    title: 'Taiwan Weather Widget',
    titleJP: '台灣天氣',
    category: 'webdev',
    year: '2023',
    description: '台湾の天気APIと連携したウィジェット。リアルタイムで天気情報を表示し、レトロなデザインで視覚化。',
    tags: ['API Integration', 'Widget', 'React'],
    images: [
      gradients[5],
      gradients[6],
    ],
    credits: [
      { role: 'Frontend Dev', name: 'Kae Feuring' },
    ],
  },
  {
    id: 'web-004',
    title: 'Chat Application',
    titleJP: 'チャットアプリ',
    category: 'webdev',
    year: '2024',
    description: 'リアルタイムメッセージングアプリ。WebSocketを使用した即時通信機能を実装し、グリーンをテーマにしたレトロUIを採用。',
    tags: ['Real-time', 'WebSocket', 'Chat'],
    images: [
      gradients[9],
      gradients[0],
      gradients[1],
      gradients[2],
      gradients[3],
    ],
    videos: ['video-placeholder-3.mp4'],
    credits: [
      { role: 'Full-stack Dev', name: 'Kae Feuring' },
      { role: 'Backend', name: 'Engineering Team' },
    ],
  },
];
