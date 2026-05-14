type DashboardTabsProps = { tabs: string[]; activeTab: string; onChange: (tab: string) => void }
export default function DashboardTabs({ tabs, activeTab, onChange }: DashboardTabsProps) {
  return (
    <div className="tabs-scroll flex gap-1.5 overflow-x-auto rounded-[12px] p-1.5"
      style={{ background: '#0F0F16', border: '1px solid rgba(255,255,255,0.06)' }}>
      {tabs.map((tab) => (
        <button key={tab} type="button" onClick={() => onChange(tab)}
          className={'shrink-0 rounded-[9px] px-4 py-2 text-sm transition-all duration-200 focus:outline-none ' + (
            activeTab === tab
              ? 'bg-[#C9A84C] text-[#09090E] font-semibold shadow-[0 4px 24px rgba(201,168,76,0.22)]'
              : 'text-[#5E5B56] hover:bg-white/4 hover:text-[#9E9A94]'
          )}>
          {tab}
        </button>
      ))}
    </div>
  )
}
