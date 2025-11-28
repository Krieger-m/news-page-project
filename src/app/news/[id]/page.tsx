import Link from "next/link";
import styles from "../../page.module.css";

interface NewsIdPageProps{
    params: {
        id:Promise<string>;
    }
}

export default async function NewsIdPage({ params }: NewsIdPageProps) {
    const newsId = (await params).id;
  return ( 
    <div className={styles.page}> 
      <main className={styles.main}> 
        <h1>Individual News Page</h1> 
        <br/> 
        <p>News article ID: {newsId}</p>
        <br/> 
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <br/> 
        <Link href={'/news'}>{'<- back'}</Link> 
      </main> 
    </div> 
  ); 
}
