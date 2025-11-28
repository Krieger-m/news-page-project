import Link from "next/link";
import styles from "../../page.module.css";
import { getNews } from "@/_data/fetchNews";
import Image from "next/image";

interface NewsIdPageProps {
  params: {
    id: Promise<string>;
  };
}

export default async function NewsIdPage({ params }: NewsIdPageProps) {

  const id = (await params).id;

  const res = await getNews(await id);

  const newsData = res[0];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{newsData.title}</h1>
        <br />
        <p>News article ID: {newsData.newsId}</p>
        <time dateTime={newsData.date}>{newsData.date}</time>
        <br />
        <Image
          src={`http://localhost:1337${newsData.image.url}`}
          alt={newsData.image.alternativeText}
          width={newsData.image.formats.small.width}
          height={newsData.image.formats.small.height}
          loading="eager"
        />
        <br />
        <div>
          <p>{newsData.content}</p>
        </div>
        <br />
        <Link href={"/news"}>{"<- back"}</Link>
      </main>
    </div>
  );
}
