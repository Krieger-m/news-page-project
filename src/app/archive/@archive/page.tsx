import styles from "../../page.module.css";
import Link from "next/link";

export default function ArchivePage() {
  return (
    <div>
        <h2>Archive Page</h2>
        <br />
        <p>News archive will be dispayed here</p>
        <br />
        <Link href={"/"}>{"<- back"}</Link>
        <br />
    </div>
  );
}
