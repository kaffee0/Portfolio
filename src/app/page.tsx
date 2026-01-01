'use client';

import React, { useState } from 'react';

export default function Home() {
  const [selectedId, setSelectedId] = useState(37); // スクリーンショットの状態を再現
  const [activeTab, setActiveTab] = useState('IMAGES');

  return (
    <main className="flex h-screen w-full items-center justify-center p-4 font-mono overflow-hidden">
      {/* メインコンソール筐体 */}
      <div className="relative flex h-[90vh] w-full max-w-[1280px] gap-6 rounded-[40px] border border-[#8F8F8F] bg-console-grey p-8 shadow-2xl overflow-hidden">
        
        {/* 左セクション: ステータスモニター & メニュー */}
        <div className="flex w-[240px] flex-col gap-4">
          {/* 黒いドットパネル */}
          <div className="bg-dots relative h-[280px] border-2 border-[#8F8F8F] p-4 text-[12px] text-matrix-blue leading-tight shadow-inner">
            <div className="scanline-overlay absolute inset-0 z-10" />
            <div className="mb-3 h-[140px] w-full bg-black border border-gray-800 overflow-hidden relative">
              {/* ビジュアルプレースホルダー */}
              <img src="img/test_02.png" alt="Status Visual" className="w-full h-full object-cover grayscale contrast-125 opacity-80" />
            </div>
            <div className="space-y-0.5 font-bold uppercase z-20 relative">
              <p>USER: <span className="text-accent-orange">tsuchifumazu</span></p>
              <p>PAGE: <span className="text-accent-orange">WORK NUMS MODE</span></p>
              <p>SORT: <span className="text-accent-orange">ALL WORKS</span></p>
              <p>SUMS: <span className="text-accent-orange">ALL - 55</span></p>
              <p>WORK: <span className="text-accent-orange">xlarge-we</span></p>
              <p>MIDI: <span className="text-accent-orange">NO MIDI</span></p>
            </div>
          </div>

          <div className="text-[10px] uppercase text-gray-500 font-black tracking-widest">Page Menu (Alt)</div>
          <div className="bg-[#CACACA] p-2 border border-[#8F8F8F] flex flex-col gap-1.5 shadow-inner">
            {['WORK NUMS MODE', 'WORK INDEX MODE', 'ABOUT tsuchifumazu'].map((menu, i) => (
              <button 
                key={menu} 
                className={`px-3 py-2 text-left text-[11px] border border-black font-bold transition-all active:scale-95 ${i === 0 ? 'bg-accent-orange text-black' : 'bg-[#F8F7F2] text-black hover:text-accent-orange hover:border-accent-orange'}`}
              >
                {menu}
              </button>
            ))}
          </div>
        </div>

        {/* 中央セクション: ナンバーグリッド */}
        <div className="flex w-[320px] flex-col gap-1">
          <div className="text-[10px] uppercase text-gray-500 font-black tracking-widest mb-1">Works (All + ← →)</div>
          <div className="bg-[#CACACA] p-2 border border-[#8F8F8F] grid grid-cols-6 gap-1 h-fit shadow-inner">
            {Array.from({ length: 60 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedId(i + 1)}
                className={`aspect-square border border-black text-[10px] flex items-start p-1 font-bold transition-colors ${selectedId === i + 1 ? 'bg-accent-orange text-black' : 'bg-[#F8F7F2] text-black hover:bg-orange-100 opacity-90'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* 右セクション: 作品詳細 & メインディスプレイ */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden">
          <div className="mb-4">
            <h2 className="text-[13px] font-medium text-gray-600">X-girl × WE LEAGUE</h2>
            <h1 className="text-2xl font-black uppercase tracking-tighter leading-none mb-3 text-black">UNIFORM LOOKBOOK</h1>
            <div className="text-[11px] grid grid-cols-[60px_1fr] gap-y-1">
              <span className="text-accent-orange font-bold">TAGS :</span> <span className="text-black">Advertisement, MV</span>
              <span className="text-accent-orange font-bold">YEAR :</span> <span className="text-black">2021/07/21</span>
              <span className="text-accent-orange font-bold">DESC :</span> <span className="text-black leading-relaxed">Kairi SatoがMovie Directorを担当しました。</span>
            </div>
          </div>

          {/* タブメニュー */}
          <div className="flex gap-0.5">
            {['IMAGES', 'VIDEOS', 'CREDIT'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-[10px] border border-black border-b-0 rounded-t-md font-bold transition-colors ${activeTab === tab ? 'bg-accent-orange text-black' : 'bg-[#AAAAAA] text-black hover:bg-gray-300'}`}
              >
                {tab} (tab)
              </button>
            ))}
          </div>

          {/* メインビューア */}
          <div className="flex-1 bg-[#CACACA] border border-[#8F8F8F] p-4 relative shadow-inner overflow-hidden">
            <div className="scanline-overlay absolute inset-0 pointer-events-none z-10 opacity-30" />
            <div className="w-full h-full bg-black border border-black flex items-center justify-center overflow-hidden">
              {/* 作品メイン画像 */}
              <img src="img/works_main.jpg" alt="Selected Work" className="max-h-full w-full object-contain" />
            </div>
            {/* サムネイル */}
            <div className="mt-4">
              <p className="text-[9px] text-gray-500 uppercase font-black mb-1">Select (↑ ↓)</p>
              <div className="flex gap-1 overflow-x-auto no-scrollbar h-12">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className={`flex-shrink-0 w-16 h-full border ${i === 0 ? 'border-accent-orange border-2' : 'border-black'} bg-black`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 下部ティッカーバー */}
        <div className="absolute bottom-6 left-8 right-8 h-12 bg-dots border border-[#8F8F8F] flex items-center overflow-hidden shadow-lg">
          <div className="whitespace-nowrap flex">
            <span className="animate-marquee inline-block text-matrix-blue text-xl font-black tracking-[0.2em] px-4">
              LET&apos;S TYPE YOUR KEY! OR MIDI PAD! —————— LET&apos;S TYPE YOUR KEY! OR MIDI PAD! —————— 
            </span>
            <span className="animate-marquee inline-block text-matrix-blue text-xl font-black tracking-[0.2em] px-4">
              LET&apos;S TYPE YOUR KEY! OR MIDI PAD! —————— LET&apos;S TYPE YOUR KEY! OR MIDI PAD! —————— 
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}