import axios from "axios";

// istek için gerekli ayarlar

const options = {
  headers: {
    "X-RapidAPI-Key": "231212d91fmshffb83140c2a81bap1f33dbjsnacbedf34ea27",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },

  params: {
    lang: "tr",
    geo: "TR",
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
