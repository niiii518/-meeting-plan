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
  Clock,
  Flag,
  ChevronRight,
  Layout,
  Star,
  BarChart2,
  ListTodo,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

// --- 組件 1: 2025 年度進度與研究計畫 (年度總表) ---
const AnnualPlan = () => {
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

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-indigo-950 p-10 text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12"><GraduationCap size={150} /></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-indigo-500/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-400/30 mb-4">
              Strategic Roadmap 2025
            </div>
            <h1 className="text-4xl font-black mb-2 tracking-tight">年度進度與研究計畫總表</h1>
            <p className="text-indigo-200 text-lg font-medium opacity-80 flex items-center gap-2">
              <FileText size={20} /> Graduate Studies Management System
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 bg-white">
          <div className="md:col-span-1 space-y-4">
            <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
              <div className="flex items-center gap-2 text-indigo-900 font-black text-sm mb-2 uppercase tracking-wide">
                <Target size={18} className="text-indigo-600" /> 核心策略
              </div>
              <p className="text-gray-600 text-xs leading-relaxed font-medium">
                本年度規劃以基礎理論紮根、實務計畫執行與學術研究發表為三大支柱。
              </p>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">計畫類別索引</div>
            <div className="flex flex-wrap gap-3">
              {Object.entries(categories).map(([name, { theme, icon }]) => (
                <span key={name} className={`px-4 py-2 rounded-2xl text-xs font-black flex items-center gap-2 shadow-sm border transition-all hover:scale-105 ${theme}`}>
                  {icon} {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
          <h2 className="font-black text-slate-800 text-lg tracking-tight uppercase">Annual Timeline</h2>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            滾動式修正中
          </div>
        </div>
        <div className="overflow-x-auto p-10">
          <div className="min-w-[900px]">
            <div className="flex mb-10 border-b border-gray-100 pb-6">
              <div className="w-1/4 font-black text-gray-300 text-[10px] tracking-[0.2em] uppercase">Academic Items</div>
              <div className="w-3/4 grid grid-cols-8 gap-4">
                {months.map(m => <div key={m} className="text-center text-indigo-950 font-black text-sm tracking-tighter">{m}</div>)}
              </div>
            </div>
            <div className="space-y-6">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center group">
                  <div className="w-1/4 pr-8">
                    <div className="text-sm font-black text-slate-700 group-hover:text-indigo-600 transition-colors tracking-tight">{task.name}</div>
                    <div className="text-[10px] text-slate-400 font-bold opacity-60 mt-0.5">{task.desc}</div>
                  </div>
                  <div className="w-3/4 grid grid-cols-8 gap-4 h-12 relative items-center">
                    {months.map((_, i) => <div key={i} className="h-full border-l border-gray-50"></div>)}
                    <div className={`absolute h-8 rounded-xl ${task.color} shadow-xl shadow-gray-200/40 cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-95 group-hover:brightness-110`}
                      style={{ left: `${((task.start - 1) / 8) * 100}%`, width: `${((task.end - task.start + 1) / 8) * 100}%` }}
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 組件 2: 機器學習 8 週進度規劃 (細節表) ---
const WeeklySchedule = () => {
  const [activeWeek, setActiveWeek] = useState(null);
  const scheduleData = [
    { week: 1, dateLabel: '12/29 - 01/06', title: '基礎導論與代數初步', chapters: 'Ch 1~5', color: 'bg-blue-600', phase: '數學基礎', tasks: ['AI/ML 範疇概觀', '線性方程與圖形', '畢氏定理與距離度量'], milestone: '01/06 Meeting: 解釋 AI/ML/DL 差異', hours: 5 },
    { week: 2, dateLabel: '01/06 - 01/13', title: '進階代數與離散基礎', chapters: 'Ch 6~10', color: 'bg-blue-500', phase: '數學基礎', tasks: ['線性規劃體驗', '二次函數與最小平方法', '集合論'], milestone: '01/13 Meeting: 掌握最小平方法擬合概念', specialEvent: '01/06 (週二) Demo SOP', hours: 5 },
    { week: 3, dateLabel: '01/13 - 01/20', title: '機率論與指數對數', chapters: 'Ch 11~15', color: 'bg-indigo-600', phase: '數學基礎', tasks: ['貝氏定理', '二項分布', 'Logistic 曲線'], milestone: '01/20 Meeting: 應用貝氏公式', specialEvent: '01/13 (週二) TA: AI工具改了多少', hours: 5 },
    { week: 4, dateLabel: '01/20 - 01/27', title: '統計指標與線代基礎', chapters: 'Ch 16~19', color: 'bg-indigo-500', phase: '數學基礎', tasks: ['平均數統計量', '向量內積', '矩陣運算'], milestone: '01/27 Meeting: 計算相關係數', specialEvent: '01/20 (週二) Paper 論文匯報', hours: 5 },
    { week: 5, dateLabel: '01/27 - 02/03', title: '多元迴歸與工具實戰', chapters: 'Ch 20~22', color: 'bg-emerald-600', phase: '實戰起步', tasks: ['矩陣解多元迴歸', '欠擬合/過擬合', 'Scikit-learn 入門'], milestone: '02/03 Meeting: 展示 Scikit-learn Demo', hours: 4 },
    { week: 6, dateLabel: '02/03 - 02/10', title: '迴歸與樹模型監督學習', chapters: 'Ch 23~26', color: 'bg-amber-600', phase: '監督式學習', tasks: ['房價迴歸實戰', '邏輯迴歸', '隨機森林'], milestone: '02/10 Meeting: 對比線性 vs 樹模型差異', hours: 5 },
    { week: 7, dateLabel: '02/10 - 02/17', title: '多樣化算法精要', chapters: 'Ch 27~30', color: 'bg-amber-500', phase: '監督式學習', tasks: ['KNN 算法', 'SVM 核技巧', '集成學習'], milestone: '02/17 Meeting: 總結監督式算法優劣', hours: 5 },
    { week: 8, dateLabel: '02/17 - 02/24', title: '非監督學習與拓展', chapters: 'Ch 31~35', color: 'bg-rose-600', phase: '進階與非監督', tasks: ['K-means 分群', 'PCA 降維', '語音辨識應用'], milestone: '02/24 Meeting: 展示聚類可視化成果', hours: 4 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-[0.2em] mb-3">
              <TrendingUp size={14} /> Weekly Milestones
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none">
              機器學習精進計畫 <span className="text-blue-600">8-Week</span>
            </h1>
            <p className="text-slate-500 mt-4 font-bold flex items-center gap-2 bg-slate-50 inline-flex px-4 py-2 rounded-xl border border-slate-100">
              <Clock size={16} className="text-slate-400" /> 2025/12/29 – 2026/02/24
            </p>
          </div>
          <div className="flex items-center gap-4 text-center">
            <div className="bg-slate-900 text-white p-4 rounded-3xl min-w-[120px] shadow-xl">
              <div className="text-3xl font-black">08</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Weeks</div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-[10px] border-b border-slate-100">
                <th className="py-6 px-10 text-left sticky left-0 bg-white/80 backdrop-blur-md z-10 w-80 font-black uppercase tracking-[0.2em]">Study Focus</th>
                {scheduleData.map(item => (
                  <th key={item.week} className="py-6 px-2 text-center min-w-[140px]">
                    <div className="text-slate-900 font-black text-xs uppercase mb-1">Meeting {item.week}</div>
                    <div className="text-[10px] text-slate-400 font-bold">{item.dateLabel}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item) => (
                <tr key={item.week} className={`hover:bg-blue-50/30 cursor-pointer transition-all ${activeWeek === item.week ? 'bg-blue-50/80' : ''}`} onClick={() => setActiveWeek(activeWeek === item.week ? null : item.week)}>
                  <td className="py-6 px-10 border-b border-slate-50 sticky left-0 bg-white hover:bg-blue-50 z-10 transition-colors">
                    <div className="font-black text-base text-slate-800 tracking-tight">{item.title}</div>
                    {item.specialEvent && <div className="text-[10px] text-rose-600 font-black mt-2 inline-flex items-center gap-1.5 bg-rose-50 px-2 py-0.5 rounded-full"><Star size={10} fill="currentColor" /> {item.specialEvent.split(') ')[1]}</div>}
                  </td>
                  {scheduleData.map(col => (
                    <td key={col.week} className="py-6 px-2 border-b border-slate-50 text-center relative group">
                      {item.week === col.week && (
                        <div className={`h-12 rounded-2xl ${item.color} shadow-lg shadow-blue-200/50 flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest animate-in zoom-in-90 duration-300`}>
                          Current
                        </div>
                      )}
                      <div className="absolute right-0 top-0 h-full w-[1px] bg-slate-50/50"></div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-10 bg-slate-950 text-white min-h-[300px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <ShieldCheck size={250} />
          </div>
          {activeWeek ? (
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex bg-blue-600 text-[10px] font-black px-3 py-1.5 rounded-lg mb-4 uppercase tracking-[0.2em] shadow-lg shadow-blue-600/20">Selected Week Detail</div>
                  <h3 className="text-3xl font-black mb-2 text-white tracking-tight">{scheduleData[activeWeek-1].title}</h3>
                  <div className="flex gap-4 items-center">
                    <span className="text-slate-400 text-xs font-bold uppercase flex items-center gap-1.5"><BookOpen size={14} /> Chapters: {scheduleData[activeWeek-1].chapters}</span>
                    <span className="text-slate-400 text-xs font-bold uppercase flex items-center gap-1.5"><Clock size={14} /> {scheduleData[activeWeek-1].hours}h Estimated</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {scheduleData[activeWeek-1].tasks.map((t, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="font-bold text-slate-200">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 p-8 rounded-[2rem] shadow-2xl">
                  <div className="flex items-center gap-3 text-amber-500 font-black text-xs mb-4 uppercase tracking-widest"><Flag size={20} /> Meeting Objectives</div>
                  <p className="text-xl font-black text-white leading-relaxed tracking-tight">「{scheduleData[activeWeek-1].milestone}」</p>
                </div>
                {scheduleData[activeWeek-1].specialEvent && (
                  <div className="bg-rose-500/10 border border-rose-500/20 p-8 rounded-[2rem]">
                    <div className="flex items-center gap-3 text-rose-500 font-black text-xs mb-3 uppercase tracking-widest"><Star size={20} fill="currentColor" /> Event Reminder</div>
                    <p className="text-base font-black text-rose-100 tracking-tight">{scheduleData[activeWeek-1].specialEvent}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-600 gap-6">
              <div className="p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-800 animate-pulse">
                <ListTodo size={48} className="text-blue-500/50" />
              </div>
              <p className="text-xl font-black italic tracking-widest uppercase opacity-40">Select a week to visualize details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- 主組件: 控制導覽與切換 ---
const App = () => {
  const [currentTab, setCurrentTab] = useState('annual');

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24 selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-slate-100 px-8 shadow-[0_1px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-24">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-900 p-3 rounded-2xl shadow-2xl shadow-indigo-200 rotate-3 transition-transform hover:rotate-0">
              <BarChart2 className="text-white" size={24} />
            </div>
            <div>
              <div className="font-black text-slate-950 tracking-tighter text-3xl flex items-center gap-2">
                PLANNER<span className="text-indigo-600">PRO</span>
                <div className="hidden md:flex bg-indigo-50 text-indigo-700 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-[0.2em] ml-3 border border-indigo-100 shadow-sm">
                  v2.0 MASTER
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-slate-100/60 p-2 rounded-[1.5rem] border border-slate-200/50 backdrop-blur-md">
            <button 
              onClick={() => setCurrentTab('annual')}
              className={`flex items-center gap-3 px-8 py-3 rounded-[1.25rem] text-sm font-black transition-all duration-500 ${currentTab === 'annual' ? 'bg-white shadow-xl text-indigo-700 scale-[1.05]' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Calendar size={18} /> 年度總表
            </button>
            <button 
              onClick={() => setCurrentTab('weekly')}
              className={`flex items-center gap-3 px-8 py-3 rounded-[1.25rem] text-sm font-black transition-all duration-500 ${currentTab === 'weekly' ? 'bg-white shadow-xl text-indigo-700 scale-[1.05]' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <ListTodo size={18} /> 8週細節表
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-10 mt-10">
        {currentTab === 'annual' ? <AnnualPlan /> : <WeeklySchedule />}
      </main>

      <footer className="max-w-6xl mx-auto px-10 mt-10">
        <div className="border-t border-slate-200/60 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
            <ShieldCheck size={14} /> Data Integrity Verified
          </div>
          <div className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2025 Research Planner Pro | Optimized for Academic Faculty Review
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;