import { useState } from "react"
import styles from './index.less'
/*
 * @Author: Chris
 * @Date: 2021-09-15 10:33:46
 * @LastEditors: Chris
 * @LastEditTime: 2021-09-15 10:39:53
 * @Descripttion: **
 */
const Index = ({children}) => {
  const [loading, setLoading] = useState(false)
  const renderChildren = typeof children === 'function' ? children({setLoading}) : null
  return <div className={styles.container}>
    {renderChildren}
    {loading && <div className={styles.mask}><div>loading...</div></div>}
  </div>
}
Index.displayName = 'Loading'
export default Index;