import { useContext, useEffect } from "react";
import { Appcontext } from "./context/Appcontext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Tag from "./components/Tag";
import Blogtitle from "./components/Blogtitle";

import "./App.css"
import Footer from "./components/Footer";


export default function App() {

  const {fetchPost } = useContext(Appcontext);
  const [searchpara, setSearchPara] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchpara.get("page") ?? 1;

    if (location.pathname.includes("tag")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchPost(Number(page), tag);

    }
    if (location.pathname.includes("category")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchPost(Number(page), null, category);
    }
    if(location.pathname.includes("blog"))
    {
      return;
    }
    else {
      fetchPost(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <div className="relative">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/category/:category" element={<Categories />}></Route>
        <Route path="/tag/:tag" element={<Tag />}></Route>
        <Route path="/blog/:blogId" element={<Blogtitle />}></Route>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}
