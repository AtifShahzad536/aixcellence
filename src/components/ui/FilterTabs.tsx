import React, { memo } from 'react'

interface FilterTab {
    id: string
    label: string
}

interface FilterTabsProps {
    tabs: readonly FilterTab[] | FilterTab[]
    activeTab: string
    onChange: (id: string) => void
    containerClassName?: string
    tabClassName?: string
    activeTabClassName?: string
}

export const FilterTabs = memo<FilterTabsProps>(({
    tabs,
    activeTab,
    onChange,
    containerClassName = "filter-tabs",
    tabClassName = "filter-tab",
    activeTabClassName = "active"
}) => {
    return (
        <div className={containerClassName}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={`${tabClassName} ${activeTab === tab.id ? activeTabClassName : ''}`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
})

FilterTabs.displayName = 'FilterTabs'
