import { getNews } from "@/_data/fetchNews";
import styles from "./page.module.css";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";


export default  function NewsPage() {

   

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>... Not Found :(</h1>
        <br />
       <p>We are sorry but the page or article you are looking for can not be found ...</p>
        <br />
        <Link href={"/"}>{"<- back"}</Link>
      </main>
    </div>
  );
}
