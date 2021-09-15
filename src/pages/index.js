import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import Tab from '../componets/Tab'
import TabItem from '../componets/Tab/TabItem'
import Loading from '../componets/Loading'
import { useRef } from 'react';

export default function() {
  const loadingRef = useRef(null)
  return (
    <div className={styles.normal}>
      {/* <div className={styles.welcome} /> */}
      {/* <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul> */}
      <Tab onChange={()=>{}}>
        <TabItem name='vue' label='vue'>vue</TabItem>
        <TabItem name='react' label='react'>react</TabItem>
      </Tab>
      <div style={{height: 240}}>
        <Loading>
          {
            ({setLoading}) => {
              console.log('渲染')
              loadingRef.current = setLoading
              return <div><button onClick={()=>{setLoading(true)}}>loading</button></div>
            }
          }
        </Loading>
      </div>

      <button onClick={()=>loadingRef.current(false)}>取消loading</button>
    </div>
  );
}
