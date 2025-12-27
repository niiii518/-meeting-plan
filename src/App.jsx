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
  AlertCircle,
  BarChart2,
  ListTodo
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

  const [hoveredTask, setHoveredTask] = useState(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-indigo-900 p-8 text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-10"><GraduationCap size={100} /></div>
          <h1 className="text-3xl font-extrabold mb-2">2025 年度進度與研究計畫</h1>
          <p className="text-indigo-200 flex items-center gap-2"><FileText size={18} /> 年度執行總表</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-900 font-bold"><Target size={18} className="text-indigo-500" /> 核心目標</div>
            <p className="text-gray-500 text-sm">聚焦於機器學習基礎紮根與碩士論文初步構思。</p>
          </div>
          <div className="flex flex-wrap gap-2 content-start col-span-2">
            {Object.entries(categories).map(([name, { theme, icon }]) => (
              <span key={name} className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${theme}`}>
                {icon} {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto p-8">
          <div className="min-w-[900px]">
            <div className="flex mb-8 border-b border-gray-100 pb-4">
              <div className="w-1/4 font-bold text-gray-400 text-xs tracking-widest">任務項目</div>
              <div className="w-3/4 grid grid-cols-8 gap-2">
                {months.map(m => <div key={m} className="text-center text-indigo-900 font-bold text-sm">{m}</div>)}
              </div>
            </div>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center group transition-all duration-300" onMouseEnter={() => setHoveredTask(task.id)} onMouseLeave={() => setHoveredTask(null)}>
                  <div className="w-1/4 pr-4 text-sm font-bold text-gray-700">{task.name}</div>
                  <div className="w-3/4 grid grid-cols-8 gap-2 h-8 relative items-center">
                    {months.map((_, i) => <div key={i} className="h-full border-l border-gray-50"></div>)}
                    <div className={`absolute h-6 rounded-full ${task.color} shadow-sm cursor-help`}
                      style={{ left: `${((task.start - 1) / 8) * 100}%`, width: `${((task.end - task.start + 1) / 8) * 100}%` }}
                    />
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
    { week: 1, dateLabel: '12/29 - 01/06', title: '基礎導論與代數初步', chapters: 'Ch 1~5', color: 'bg-blue-500', phase: '數學基礎', tasks: ['AI/ML 範疇概觀', '線性方程與圖形', '畢氏定理與距離度量'], milestone: '01/06 Meeting: 解釋 AI/ML/DL 差異', hours: 5 },
    { week: 2, dateLabel: '01/06 - 01/13', title: '進階代數與離散基礎', chapters: 'Ch 6~10', color: 'bg-blue-500', phase: '數學基礎', tasks: ['線性規劃體驗', '二次函數與最小平方法', '集合論'], milestone: '01/13 Meeting: 掌握最小平方法擬合概念', specialEvent: '01/06 (週二) Demo SOP', hours: 5 },
    { week: 3, dateLabel: '01/13 - 01/20', title: '機率論與指數對數', chapters: 'Ch 11~15', color: 'bg-indigo-500', phase: '數學基礎', tasks: ['貝氏定理', '二項分布', 'Logistic 曲線'], milestone: '01/20 Meeting: 應用貝氏公式', specialEvent: '01/13 (週二) TA: AI工具改了多少', hours: 5 },
    { week: 4, dateLabel: '01/20 - 01/27', title: '統計指標與線代基礎', chapters: 'Ch 16~19', color: 'bg-indigo-500', phase: '數學基礎', tasks: ['平均數統計量', '向量內積', '矩陣運算'], milestone: '01/27 Meeting: 計算相關係數', specialEvent: '01/20 (週二) Paper 論文匯報', hours: 5 },
    { week: 5, dateLabel: '01/27 - 02/03', title: '多元迴歸與工具實戰', chapters: 'Ch 20~22', color: 'bg-emerald-500', phase: '實戰起步', tasks: ['矩陣解多元迴歸', '欠擬合/過擬合', 'Scikit-learn 入門'], milestone: '02/03 Meeting: 展示 Scikit-learn Demo', hours: 4 },
    { week: 6, dateLabel: '02/03 - 02/10', title: '迴歸與樹模型監督學習', chapters: 'Ch 23~26', color: 'bg-amber-500', phase: '監督式學習', tasks: ['房價迴歸實戰', '邏輯迴歸', '隨機森林'], milestone: '02/10 Meeting: 對比線性 vs 樹模型差異', hours: 5 },
    { week: 7, dateLabel: '02/10 - 02/17', title: '多樣化算法精要', chapters: 'Ch 27~30', color: 'bg-amber-500', phase: '監督式學習', tasks: ['KNN 算法', 'SVM 核技巧', '集成學習'], milestone: '02/17 Meeting: 總結監督式算法優劣', hours: 5 },
    { week: 8, dateLabel: '02/17 - 02/24', title: '非監督學習與拓展', chapters: 'Ch 31~35', color: 'bg-rose-500', phase: '進階與非監督', tasks: ['K-means 分群', 'PCA 降維', '語音辨識應用'], milestone: '02/24 Meeting: 展示聚類可視化成果', hours: 4 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <Layout className="text-blue-600" /> 機器學習 8 週進度規劃 (週二 Meeting 基準)
        </h1>
        <p className="text-slate-500 mt-1">2025/12/29 – 2026/02/24 | 每週二匯報前一週成果</p>
      </header>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-600 text-xs border-b border-slate-200">
                <th className="py-4 px-6 text-left sticky left-0 bg-slate-100 z-10 w-64">任務 / 週二基準區間</th>
                {scheduleData.map(item => (
                  <th key={item.week} className="py-4 px-2 text-center min-w-[120px]">
                    <div className="text-slate-900 font-bold">Meeting {item.week}</div>
                    <div className="text-[10px] text-slate-500">{item.dateLabel}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item) => (
                <tr key={item.week} className={`hover:bg-slate-50 cursor-pointer ${activeWeek === item.week ? 'bg-blue-50' : ''}`} onClick={() => setActiveWeek(activeWeek === item.week ? null : item.week)}>
                  <td className="py-4 px-6 border-b border-slate-100 sticky left-0 bg-white hover:bg-slate-50 z-10">
                    <div className="font-bold text-sm text-slate-900">{item.title}</div>
                    {item.specialEvent && <div className="text-[9px] text-rose-600 font-bold mt-1">★ {item.specialEvent.split(') ')[1]}</div>}
                  </td>
                  {scheduleData.map(col => (
                    <td key={col.week} className="py-4 px-2 border-b border-slate-100 text-center">
                      {item.week === col.week && <div className={`h-8 rounded-lg ${item.color} shadow-sm text-white text-[10px] flex items-center justify-center font-bold tracking-tighter`}>執行中</div>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 點擊顯示詳情 */}
        <div className="p-6 bg-slate-900 text-white min-h-[200px]">
          {activeWeek ? (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-blue-400">Week {activeWeek} 章節重點: {scheduleData[activeWeek-1].chapters}</h3>
                <ul className="space-y-2">
                  {scheduleData[activeWeek-1].tasks.map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm bg-slate-800 p-2 rounded"><CheckCircle2 size={14} className="text-emerald-400" /> {t}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-amber-500/10 border border-amber-500/50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-amber-400 font-bold mb-2"><Flag size={18} /> Meeting 匯報重點</div>
                  <p className="text-sm text-slate-300">「{scheduleData[activeWeek-1].milestone}」</p>
                </div>
                {scheduleData[activeWeek-1].specialEvent && (
                  <div className="bg-rose-500/20 border border-rose-500/50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-rose-400 font-bold mb-1"><Star size={18} /> 特別提醒</div>
                    <p className="text-xs">{scheduleData[activeWeek-1].specialEvent}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p className="text-center text-slate-500 py-10 italic">點擊上方週次檢視詳細讀書進度</p>
          )}
        </div>
      </div>
    </div>
  );
};

// --- 主組件: 控制導覽與切換 ---
const App = () => {
  const [currentTab, setCurrentTab] = useState('annual'); // 'annual' 或 'weekly'

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 頂部導覽列 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-2 font-black text-indigo-900 tracking-tighter text-xl">
            <BarChart2 className="text-indigo-600" />
            PLANNER<span className="text-indigo-400 font-light">PRO</span>
          </div>
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button 
              onClick={() => setCurrentTab('annual')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentTab === 'annual' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Calendar size={16} /> 年度總表
            </button>
            <button 
              onClick={() => setCurrentTab('weekly')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentTab === 'weekly' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <ListTodo size={16} /> 8週細節表
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-8 mt-4">
        {currentTab === 'annual' ? <AnnualPlan /> : <WeeklySchedule />}
      </main>

      {/* 頁尾提示 */}
      <footer className="text-center text-gray-400 text-[10px] mt-10">
        © 2025 寒假研究計畫管理系統 | 最後更新於 12/27
      </footer>
    </div>
  );
};

export default App;