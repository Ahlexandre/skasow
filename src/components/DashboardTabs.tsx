type DashboardTabsProps = {
  tabs: string[]
  activeTab: string
  onChange: (tab: string) => void
}

export default function DashboardTabs({
  tabs,
  activeTab,
  onChange,
}: DashboardTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto rounded-3xl border border-neutral-200 bg-[#F5F5F3] p-1.5">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/10 ${
            activeTab === tab
              ? 'bg-white text-[#111111] shadow-sm'
              : 'text-[#6B7280] hover:text-[#111111]'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
