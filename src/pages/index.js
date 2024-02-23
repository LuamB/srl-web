import { Inter } from "next/font/google";
import {SectionHeading} from "../components/SectionHeading"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Alliance Solidarity with Refugees in Libya</h1>

      <section className="my-20">
        {/* About section content */}
        <SectionHeading>About</SectionHeading>
        {/* ... about content */}
      </section>

      <section className="my-20">
        {/* Blog section content */}
        <SectionHeading>Blog</SectionHeading>
        {/* ... blog content */}
      </section>

      <section className="my-20">
        {/* Action section content */}
        <SectionHeading>Action</SectionHeading>
        {/* ... action content */}
      </section>

      <section className="my-20">
        {/* Donate section content */}
        <SectionHeading>Donate</SectionHeading>
        {/* ... donate content */}
      </section>
  </main>
  );
}
