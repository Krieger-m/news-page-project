import Link from "next/link";
import styles from "../../page.module.css";

export default function NewsIdPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Individual News Page</h1>
        <br/>
        <Link href={'/'}>Back home ...</Link>
      </main>
    </div>
  );
}
