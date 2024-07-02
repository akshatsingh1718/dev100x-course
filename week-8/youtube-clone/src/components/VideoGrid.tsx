import VideoCard from "./VideoCard";

const VIDEOS = [
  {
    title: "How to plan coding in 30 days",
    image: "thumbnail.png",
    thumbImage: "thumbnail.png",
    author: "Akshat Singh",
    views: "100K",
    timestamp: "30 days ago",
  },

  {
    title: "How to plan coding in 30 days",
    image: "thumbnail.png",
    thumbImage: "thumbnail.png",
    author: "Akshat Singh",
    views: "100K",
    timestamp: "30 days ago",
  },
];

export const VideoGrid = () =>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            VIDEOS.map(video => <div>
                <VideoCard {...video} />

            </div>
            )
        }
    </div>
}