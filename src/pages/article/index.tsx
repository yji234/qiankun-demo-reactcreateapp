import { useModel } from 'umi';
import styles from './index.less';

export default function ArticlePage() {
  return (
    <div>
      <h1 className={styles.title}>我是子应用 Article页面</h1>
    </div>
  );
}
