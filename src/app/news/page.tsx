import styles from "../page.module.css";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>News Page</h1>
        <br/>
        <Link href={'/news/1'}>News Article 1</Link>
        <br/>
        <Link href={'/news/2'}>News Article 2</Link>
        <br/>
        <Link href={'/news/3'}>News Article 3</Link>
      </main>
    </div>
  );
}
