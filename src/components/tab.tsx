import React, { useState } from 'react'

type Tab = {
  title: string
  content: React.ReactNode // Can hold any type of React element or content
}

interface TabsProps {
  tabs: Tab[]
}
const Tab: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div className="w-full">
      {/* Tab headers */}
      <div className="flex space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 text-sm font-medium 
              ${
                activeTab === index
                  ? 'border-b-2 border-black'
                  : 'border-b-2 border-transparent'
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="py-4">
        {tabs[activeTab] && <div>{tabs[activeTab].content}</div>}
      </div>
    </div>
  )
}

export default Tab
