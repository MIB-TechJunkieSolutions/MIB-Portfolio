import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <main className="w-screen h-screen relative">
    <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(/main-bg.jpg)'}}>

      <div className="pl-20 pt-[15%] md:pl-40 pb-56 m:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
        <h1 className="text-[40px] text-white font-semibold">
          Elevate Your Online Presence with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> 
          {" "} 
          MIB-TechSolutions
          </span>
        </h1>

        <p className="text-gray-200 hidden md:block">
        Unlock the potential of your business with top-notch web development solutions. As a skilled web developer, I specialize in crafting engaging websites and intuitive applications that captivate your audience. Let's bring your digital vision to life. 
        {/* Click the contact button and let's get started! */}
        </p>

        <div className="flex-col gap-5 md:flex-row hidden md:flex">
          <Link href="/my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            Learn More
          </Link>
          <Link href="/my-projects" className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group hover:opacity-20"/>
            My Projects
          </Link>
          <Link href="/contact-me" className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20"/>
            Contact Me
          </Link>
        </div>

      </div>
    </div>

    <div className="absolute flex bottom-10 z-20 right-5 flex-col gap-5 md:hidden">
      <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
        Learn More
      </Link>
      <Link href="/my-projects" className="rounded-[20px] group bg-transparent px-5 py-3 text-lg text-white border border-white max-w-[200px]">
        My Projects
      </Link>
      <Link href="/contact-me" className="rounded-[20px] group bg-transparent px-5 py-3 text-lg text-white border border-white max-w-[200px]">
        Contact Me
      </Link>
    </div>

    <div className="absolute bottom-0 right-0 z-[10]">
      <Image
        src='/horse.png'
        alt="horse"
        height={300}
        width={300}
        className="absolute right-55 top-40"
      />
      <Image
        src='/cliff.webp'
        alt="cliff"
        height={480}
        width={480}
      />
    </div>

    <div className="absolute bottom-0 z-[5] w-full h-auto sm:display-none">
      <Image
        src='/trees.webp'
        alt="horse"
        height={2000}
        width={2000}
        className="w-full h-full"
      />
    </div>
    <Image
      src='/stars.png'
      alt="stars"
      height={300}
      width={300}
      className="absolute top-10 left-0 z-[10]"
      />
  </main>
  );
}
