import styles from "../../page.module.css";
import Link from "next/link";

export default function LatestNewsPage() {
  return (
    <div>
        <h1>Latest News Page</h1>
        <br />
        <Link href={"/"}>{"<- back"}</Link>
    </div>
  );
}
