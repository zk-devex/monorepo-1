import Link from "next/link"


export default function About() {
const data = {
    name: 'elon',
    name2: 'mask'
}

  return (
    <div>
        <Link href='/'>Go to home</Link>
        <h1 className="text-5xl">About Page</h1>
        {
            
            console.log(data)
        }
    </div>
  )
}
