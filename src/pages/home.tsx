import React from 'react'
import Tab from '../components/tab'

const Home = () => {
  const tabData: Tab[] = [
    { title: 'Tab 1', content: <p>This is content for Tab 1</p> },
    { title: 'Tab 2', content: <p>This is content for Tab 2</p> },
    { title: 'Tab 3', content: <p>This is content for Tab 3</p> },
  ]
  return (
    <div className="container mx-auto p-4">
      <Tab tabs={tabData} />
    </div>
  )
}

export default Home
