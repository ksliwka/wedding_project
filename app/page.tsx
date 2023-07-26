import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HELLO</h1>
      <Link href="/login">Login</Link>
    </main>
  );
}
