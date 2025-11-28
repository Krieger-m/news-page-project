import { getNews } from "@/_data/fetchNews";
import styles from "../page.module.css";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";


export default async function NewsPage() {

    const newsData = await getNews();

    // console.log(newsData);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>News Page</h1>
        <br />
        {newsData.map((article:any, index:number)=>(
            <Fragment key={index}>
                <Link href={`/news/${article.slug}`}>{article.title}</Link>
                <br />
            </Fragment>
        ))}
        <Link href={"/"}>{"<- back"}</Link>
      </main>
    </div>
  );
}
