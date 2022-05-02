import { useModel } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>我是子应用 首页</h1>
    </div>
  );
}
