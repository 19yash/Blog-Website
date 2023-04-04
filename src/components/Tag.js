import { useLocation, useNavigate, useSearchParams } from "react-router-dom";


import Blogs from "./Blogs";
import Footer from "./Footer";
const Tag = () => {

    const navigator = useNavigate();
   
    const location = useLocation();
    const [searchParam,setSearchPara] = useSearchParams();


    const handleback = () => {
        navigator("/");
    }

    console.log(location.search);
    console.log(location.pathname);
    return (
        <div className="max-w-[530px] w-11/12 mx-auto py-3 mb-16">
            <button className="border shadow-md px-2 py-1 " onClick={handleback}>Back</button>

            <div className="max-w-[530px] w-11/12 mx-auto py-3 mb-16">
                <Blogs></Blogs>
                {/* <Footer></Footer> */}
            </div>
        </div>

    );
}
export default Tag;