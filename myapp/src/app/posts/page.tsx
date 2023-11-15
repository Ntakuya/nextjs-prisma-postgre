import Link from "next/link";
import { headers } from "next/headers";

const fetchData = async (host: string) => {
  const res = await fetch(`http://${host}/api/posts`);
  return res.json();
};

export default async function Home() {
  const host = headers().get("host");
  const data = await fetchData(host!);
  console.log(data)
    return (
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        smaple
        <Link href={`/`}>top</Link>
      </main>
    )
  }
