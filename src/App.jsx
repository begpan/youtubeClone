import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import VideoDetail from "../pages/VideoDetail";
import SearchResults from "../pages/SearchResults";
import Header from "./components/Header";
import UndefinedPage from "./components/UndefinedPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/*" element={<UndefinedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
