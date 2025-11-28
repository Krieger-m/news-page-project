import styles from "../../page.module.css";
import Link from "next/link";

export default function ArchivePage() {
  return (
    <div>
        <h1>Archive Page</h1>
        <br />
        <Link href={"/"}>{"<- back"}</Link>
    </div>
  );
}
