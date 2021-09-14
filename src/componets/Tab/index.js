/*
 * @Author: Chris
 * @Date: 2021-09-14 17:00:23
 * @LastEditors: Chris
 * @LastEditTime: 2021-09-14 18:02:08
 * @Descripttion: **
 */
import React, { useState, useRef } from 'react';
import styles from './index.less'

const Index = ({children, onChange, defaultActive = ''}) => {
  const activeIndex = useRef(defaultActive)
  const [, forceUpdate] = useState({})
  const tabList = [];
  let renderChildren = null;
  React.Children.forEach(children, item => {
    const {label, name} = item.props;
    if(React.isValidElement && item.type.displayName === 'TabItem') {
      const tabItem = {
        name,
        label,
        component: item,
        active: name === activeIndex.current
      }
      if(name === activeIndex.current) {
        renderChildren = item
      }
      tabList.push(tabItem);
    }
  })

  if(!renderChildren && tabList.length > 0){
    const fisrtChildren = tabList[0]
    renderChildren = fisrtChildren.component
    activeIndex.current = fisrtChildren.component.props.name
    fisrtChildren.active = true
  }

  const changeTab = (name) => {
    activeIndex.current = name;
    onChange(name)
    forceUpdate({})
  }

  return <div className={styles.container}>
    <div className={styles.header}>
      {
        tabList.map((item, index) => <div  className={styles.tabTitle} key={index} onClick={() => changeTab(item.name)}>
          <div className={styles.title}>{item.label}</div>
          {activeIndex.current === item.name && <span className={styles.active}></span>}
          </div>)
      }
    </div>
    <div className={styles.content}>
      {
        renderChildren
      }
    </div>
  </div>
}
Index.displayName = 'Tab'
export default Index;