import axios from "axios";

// istek için gerekli ayarlar

const options = {
  headers: {
    "X-RapidAPI-Key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },

  params: {
    lang: "en",
    geo: "US",
  },
};

// yapılan butun isteklerin ortak olan baslangıc kısmı
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// parametre olarak aldıgı url a istek atık geriye
// elde ettiği verileri döndürren

export const getData = async (endpoint) => {
  try {
    const res = await axios.get(endpoint, options);
    return res.data;
  } catch (err) {
    console.log("bir sorun oluştu", err);
  }
};
