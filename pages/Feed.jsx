import { useContext } from "react";
import Sidebar from "../src/components/Sidebar";
import { VideoContext } from "../src/context/VideoContext";
import VideoCard from "../src/components/VideoCard";
import Loader from "../src/components/Loader";

const Feed = () => {
  const { videos } = useContext(VideoContext);
  return (
    <div className="flex">
      <Sidebar />

      <div className="videos">
        {!videos ? (
          <Loader />
        ) : (
          videos.map(
            (item) =>
              item.type === "video" && (
                <VideoCard key={item.videoId} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
