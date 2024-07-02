import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AppBar />
      {/* <VideoCard
        title="How to plan coding in 30 days"
        image="thumbnail.png"
        thumbImage="thumbnail.png"
        author="Akshat Singh"
        views="100K"
        timestamp="30 days ago"
      ></VideoCard> */}
      <VideoGrid />
    </div>
  );
}
