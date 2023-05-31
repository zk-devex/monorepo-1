
import Button from "@/components/button/button"
import Link from "next/link"


export default function About(props) {


  return (
    <div>
      <Link href="/">Go to home</Link>
      <h1 className="text-5xl">About Page</h1>

      <Button btn_name="Get Start" />
    </div>
  );
}
