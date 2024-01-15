import Button from "@/components/button/button";
import Link from "next/link";

export default function Home(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <h1>Zobaidul Kazi</h1>

      <Link href="/about">
        <Button btn_name="go to about page"></Button>
      </Link>
      <h1>Go to my one app</h1>
      <Link href='https://github.com/zobaidulkazi/book_api.git'>Github Link</Link>
    </div>
  );
}
