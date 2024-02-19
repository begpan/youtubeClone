import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";

// 1) context temelini oluştur
export const VideoContext = createContext();

// 2) saglayıcıı tanımla

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  //   kategori her depşltşpşnde apiden veri al
  useEffect(() => {
    // önceki kategorilerin videlolarını kaldır

    setVideos(null);
    // type home ise home endpointine istek at
    if (selectedCategory.type === "home") {
      getData("/home").then((res) => setVideos(res.data));
      // type trend ise trend endpointine istek at
    } else if (selectedCategory.type === "trending") {
      getData("/trending").then((res) => setVideos(res.data));
      // type category ise seearch endpointine istek at
    } else if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((res) =>
        setVideos(res.data)
      );
    }
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{ videos, selectedCategory, setSelectedCategory }}
    >
      {children}
    </VideoContext.Provider>
  );
};
