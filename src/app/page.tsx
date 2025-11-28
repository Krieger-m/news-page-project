import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Landing Page</h1>
        <br/>
        <Link href={'/news'}>News Page</Link>
        <br/>
        <Link href={'/archive'}>Archive Page</Link>
      </main>
    </div>
  );
}
