import styles from "../../page.module.css";
import Link from "next/link";

export default function LatestNewsPage() {
  return (
    <div>
        <h1>Latest News Page</h1>
        <br />
        <p>Latest news will be dispayed here</p>
        <br />
        <Link href={"/"}>{"<- back"}</Link>
        <br />
    </div>
  );
}
