import Image from "next/image";
import localFont from "next/font/local";
import TopNav from "@/components/topnav";
import Link from "next/link";
import TopNavSec from "@/components/topnav2";
import SideBar from "@/components/sidebar";
import AllTasks from "@/components/alltask";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="bg-[#dbeafe] h-[100%] gap-4">
     <Link href='/Home' className="ml-4">Home</Link>
     <Link href='/fulllibrary' className="ml-8">Full Library</Link>
    </div>
  );
}
