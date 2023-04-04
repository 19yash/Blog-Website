import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Blogs from "./Blogs";

const Categories = () => {

    const navigator = useNavigate();
   

    const handleback = () => {
        navigator("/");
    }
   
    return (
        <div  className="max-w-[530px] w-11/12 mx-auto py-3 mb-16">
            <button className="border shadow-md px-2 py-1" onClick={handleback}>Back</button>

           <Blogs/>
           {/* <Footer></Footer> */}
        </div>

    );
}
export default Categories;