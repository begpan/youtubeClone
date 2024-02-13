import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../src/helpers/getData";
import ReactPlayer from "react-player";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../src/components/StringArea";
import Loader from "../src/components/Loader";
import VideoCard from "../src/components/VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState();
  // 19 arama parametreisni erişim içinm kurulum
  const [searchParams] = useSearchParams();

  // 2) url den v isimli arama parametresini al
  const id = searchParams.get("v");

  //3) id si bililen vienun bilgilerini APIden al
  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, [searchParams]);

  return (
    <div className="detail-page h-screen overflow-auto p-5">
      {/* video içeriği */}
      <div>
        <ReactPlayer
          className={"rounded"}
          width={"100%"}
          height={"50vh"}
          light
          controls
          playing
          url={`https://www.youtube.com/watch?v=${id}`}
        />

        {!video ? (
          <p>yükleniyor</p>
        ) : (
          <>
            {/* başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            {/* kanal bilgileri */}
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                  alt=""
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-grat-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
                  Abone Ol
                </button>
              </div>

              <div className="flex items-center bg-[#272727] rounded-full cursor-pointer">
                <div className="flex items-center gap-4 py-2 px-4 border-r">
                  <AiFillLike />
                  <p>{}</p>
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
            </div>
            {/* video bilgileri */}
            <div className="bg-[#27272] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} görüntülenme</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>
          </>
        )}
      </div>
      {/* alakalı içerikler */}
      <div className="flex flex-col gap-5 p-1 sm:p-6 max-sm:mt-6">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard video={item} isRow={true} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
