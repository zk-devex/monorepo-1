import Link from "next/link"


export default function Home() {
  return (
   <div>
    <h1>Home Page</h1>
    <h1>Zobaidul Kazi</h1>

    <button>
      <Link href='/about'>About</Link>
    </button>
   </div>
  )
}
