import { useSearchParams } from "react-router-dom";
import Sidebar from "../src/components/Sidebar";
import { useEffect, useState } from "react";
import { getData } from "../src/helpers/getData";
import Loader from "../src/components/Loader";
import VideoCard from "../src/components/VideoCard";
const SearchResults = () => {
  const [results, setResults] = useState(null);
  // urlden aratılan teriimi al
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  console.log(query);
  // apiden aratılan terime uygun videoları al

  useEffect(() => {
    getData(`/search?query=${query}&type=video`).then((res) => setResults(res));
  }, [searchParams]);

  // her yeni terim aratıldıgın d useefer yeniden calıssın istiyoruz bu yuzden bagımlılık dizisine arma parametresi verdik

  // boylelikle her atarrıldıgında useefect yendien calıscak

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex justify-center gap-10 items-center flex-1 px-4 h-screen overflow-auto">
        <div className="flex flex-col gap-9 max-w-[1000px]">
          <p className="flex gap-2 text-lg">
            <span className="font-bold">{query}</span>
            <span>için sonuçlar</span>
          </p>

          {!results ? (
            <Loader />
          ) : (
            results.data.map(
              (item) =>
                item.type === "video" && (
                  <VideoCard key={item.videoId} video={item} isRow={true} />
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
