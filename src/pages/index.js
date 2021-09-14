import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import Tab from '../componets/Tab'
import TabItem from '../componets/Tab/TabItem'
export default function() {
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
    </div>
  );
}
