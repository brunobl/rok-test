import React, { useState } from "react"
import AngleDown from '../Helpers/AngleDown'
import AngleUp from '../Helpers/AngleUp'

const Tab = ({ title, onClick, activeTab }) => {
  let className =
    "uppercase py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium"
  if (activeTab === title) {
    className += " border-b-2 border-orange text-orange"
  }
  return (
    <button
      onClick={() => onClick(title)}
      className={className}
      style={{ marginBottom: "-0.1rem" }}
    >
      {title}
    </button>
  )
}

const TabMobile = ({ title, content }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
          <button
            onClick={()=> setOpen(!open)}
            className={"flex justify-between w-full uppercase py-6 px-2 block focus:outline-none font-medium border-b border-gray-light "+ (open ? "border-b-2 border-orange text-orange": " text-white")}
            style={{ marginBottom: "-0.1rem" }}
          >
            {title}
            {
              open ? <AngleUp color="#ff6303" /> : <AngleDown />
            }
            
          </button>
      <div className={open ? "block text-white m-10 description-tabs" : "hidden"}>
        {content}
      </div>
    </div>
  )
}

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.title)

  const onClickTabItem = title => {
    setActiveTab(title)
  }

  const isActiveTab = title => activeTab === title

  return (
    <>
      <div className="my-32 md:hidden mobile">
      {children.map(child => {
            const { title, children } = child.props
            return (
              <TabMobile
                key={title}
                title={title}
                content={children}
              />
            )
      })}
      </div>
      <div className="mt-32 md:block hidden">
        <nav className="flex flex-col sm:flex-row border-b-2 border-gray-light text-white">
          {children.map(child => {
            const { title } = child.props
            return (
              <Tab
                activeTab={activeTab}
                key={title}
                title={title}
                onClick={() => onClickTabItem(title)}
              />
            )
          })}
        </nav>
      </div>
      <div className="md:block hidden tab-content min-h-screen-40">
        {children.map(child => {
          return (
            <div
              className={
                "text-white m-10 description-tabs " +
                (isActiveTab(child.props.title) ? "" : "hidden")
              }
            >
              {child.props.children}
            </div>
          )
        })}
      </div>
    </>
  )
}

export { Tabs, Tab }
