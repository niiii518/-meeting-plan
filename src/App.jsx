import React, { useState } from 'react';
import { 
  Calendar, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  ClipboardList, 
  User, 
  Target, 
  FileText,
  Clock
} from 'lucide-react';

const App = () => {
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'];
  
  const tasks = [
    { id: 1, name: '機器學習入門', start: 1, end: 2, category: '學習', color: 'bg-indigo-500', desc: '掌握 ML 基本理論與演算法實作' },
    { id: 2, name: 'PYTHON那本書', start: 1, end: 2, category: '學習', color: 'bg-indigo-400', desc: '語法精進與進階庫應用' },
    { id: 3, name: '計畫交接 P1 (階段一)', start: 1, end: 2, category: '計畫', color: 'bg-emerald-500', desc: '前期進度與文檔轉移' },
    { id: 11, name: 'TA: ai工具改了多少', start: 1, end: 2, category: '教學', color: 'bg-rose-500', desc: '輔導教材更新與工具優化' },
    { id: 6, name: '老師給的 PAPER', start: 1, end: 2, category: '學術', color: 'bg-amber-500', desc: '深度文獻回顧與分析' },
    { id: 7, name: '英文片語', start: 1, end: 2, category: '個人發展', color: 'bg-slate-400', desc: '學術英文口說與書寫強化' },
    { id: 4, name: '計畫交接 P2', start: 3, end: 4, category: '計畫', color: 'bg-emerald-400', desc: '系統權限與核心邏輯交接' },
    { id: 9, name: '管理的實踐', start: 1, end: 6, category: '個人發展', color: 'bg-slate-500', desc: '管理學核心概念研讀' },
    { id: 5, name: '計畫交接 P1 (階段二)', start: 5, end: 6, category: '計畫', color: 'bg-emerald-600', desc: '結案報告與最終驗收' },
    { id: 8, name: '資料結構 + 機器學習補強', start: 7, end: 8, category: '學習', color: 'bg-indigo-600', desc: '算法優化與模型實作深度結合' },
    { id: 10, name: '碩士論文', start: 7, end: 8, category: '學術', color: 'bg-amber-600', desc: '論文撰寫、實驗分析與口試準備' },
  ];

  const categories = {
    '學術': { color: 'bg-amber-500', icon: <GraduationCap size={16} />, theme: 'text-amber-600 bg-amber-50' },
    '計畫': { color: 'bg-emerald-500', icon: <Briefcase size={16} />, theme: 'text-emerald-600 bg-emerald-50' },
    '學習': { color: 'bg-indigo-500', icon: <BookOpen size={16} />, theme: 'text-indigo-600 bg-indigo-50' },
    '教學': { color: 'bg-rose-500', icon: <ClipboardList size={16} />, theme: 'text-rose-600 bg-rose-50' },
    '個人發展': { color: 'bg-slate-500', icon: <User size={16} />, theme: 'text-slate-600 bg-slate-50' },
  };

  const [hoveredTask, setHoveredTask] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-12 font-sans selection:bg-indigo-100">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Academic Header */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-indigo-900 p-8 text-white relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <GraduationCap size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-indigo-400/30">
                  Research & Education Plan
                </span>
              </div>
              <h1 className="text-4xl font-extrabold mb-2 tracking-tight">2025 年度進度與研究計畫</h1>
              <p className="text-indigo-200 text-lg flex items-center gap-2">
                <FileText size={18} /> 指導老師評閱專用資訊圖表
              </p>
            </div>
          </div>

          {/* Quick Insights Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-indigo-900 font-bold">
                <Target className="text-indigo-500" /> 核心目標
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                本年度上半年以「機器學習實作」與「計畫交接」為主軸，下半年全面轉向「碩士論文」撰寫與深度算法優化。
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-indigo-900 font-bold">
                <Clock className="text-indigo-500" /> 階段性重點
              </div>
              <ul className="text-gray-500 text-sm space-y-1 list-disc list-inside">
                <li>Q1-Q2: 跨領域基礎紮根 (ML/AI TA)</li>
                <li>Q3-Q4: 研究深化 (Thesis/Data Struct)</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 content-start">
              {Object.entries(categories).map(([name, { theme, icon }]) => (
                <span key={name} className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${theme}`}>
                  {icon} {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Gantt Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <Calendar size={20} className="text-indigo-600" />
              時程明細表 (Gantt Chart)
            </h2>
            <div className="text-xs text-gray-400">
              * 懸停查看詳細說明
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[900px] p-8">
              {/* Timeline Header */}
              <div className="flex mb-8 border-b border-gray-100 pb-4">
                <div className="w-1/4 pr-4 font-bold text-gray-400 text-xs uppercase tracking-widest">Task Description</div>
                <div className="w-3/4 grid grid-cols-8 gap-2">
                  {months.map(m => (
                    <div key={m} className="text-center">
                      <div className="text-indigo-900 font-bold text-sm mb-1">{m}</div>
                      <div className="w-full h-1 bg-indigo-50 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Task Rows */}
              <div className="space-y-5">
                {tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className={`flex items-start group transition-all duration-300 ${hoveredTask === task.id ? 'translate-x-1' : ''}`}
                    onMouseEnter={() => setHoveredTask(task.id)}
                    onMouseLeave={() => setHoveredTask(null)}
                  >
                    {/* Task Info */}
                    <div className="w-1/4 pr-6">
                      <div className="text-sm font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {task.name}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-0.5 line-clamp-1 group-hover:line-clamp-none transition-all">
                        {task.desc}
                      </div>
                    </div>

                    {/* Bar Container */}
                    <div className="w-3/4 grid grid-cols-8 gap-2 h-10 relative items-center">
                      {/* Grid Background */}
                      {months.map((_, i) => (
                        <div key={i} className="h-full border-l border-gray-50"></div>
                      ))}
                      
                      {/* Progress Bar */}
                      <div 
                        className={`absolute h-7 rounded-lg ${task.color} shadow-lg shadow-gray-200/50 flex items-center justify-start px-3 group-hover:brightness-105 transition-all cursor-help`}
                        style={{
                          left: `calc(${((task.start - 1) / 8) * 100}% + 2px)`,
                          width: `calc(${((task.end - task.start + 1) / 8) * 100}% - 4px)`,
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2 shrink-0"></div>
                        <span className="text-[10px] text-white font-bold tracking-wide truncate">
                          {task.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Statistics Footer */}
          <div className="p-8 bg-indigo-50/30 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-12">
              <div className="text-center md:text-left">
                <div className="text-2xl font-black text-indigo-900 leading-none">{tasks.length}</div>
                <div className="text-[10px] text-indigo-500 font-bold uppercase tracking-tighter mt-1">Total Tasks</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-black text-emerald-600 leading-none">100%</div>
                <div className="text-[10px] text-emerald-500 font-bold uppercase tracking-tighter mt-1">Status Tracking</div>
              </div>
              <div className="text-center md:text-left border-l border-indigo-100 pl-12 hidden md:block">
                <div className="text-sm font-bold text-indigo-900">學術產出預估</div>
                <div className="text-[10px] text-gray-400">論文撰寫完成度 50%+</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-[10px] text-gray-400 font-medium">最後更新日期：2025年12月27日</div>
              <div className="text-xs text-indigo-900 font-bold italic mt-1 font-serif">"Practice makes perfect in Research."</div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="flex justify-center pb-8">
          <p className="text-gray-400 text-xs text-center max-w-lg">
            本計畫表為初步規劃，將根據實驗進度與老師指導進行滾動式修正。
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;