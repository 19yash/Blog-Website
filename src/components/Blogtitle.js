import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/Appcontext";
import Blog from "./Blog";
import Spinner from "./Spinner";
const Blogtitle = () => {

    const navigator = useNavigate();
    const location  = useLocation();

    const {Loading,setLoading} = useContext(Appcontext);
    const[blog,setBlog] = useState(null);
    const[relatedBlogs,setRelatedBlog] = useState([]);
    
    const blodId = location.pathname.split("/").at(-1);
    
    async function fetchRelatedPost(){
        setLoading(true);
        const  url ="https://codehelp-apis.vercel.app/api/" ;
        
        try{
            
            const response = await fetch(url+`get-blog?blogId=${blodId}`);
            const output = await response.json();
            console.log(output);
            setBlog(output.blog);
            setRelatedBlog(output.relatedBlogs);
        }
        catch(err)
        {
            console.log(err);
            setBlog(null);
            setRelatedBlog([]);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchRelatedPost();
    },[location.pathname]);

    const handleback = () => {
        navigator(-1);
    }
   
    return (
        <div  className="max-w-[530px] w-11/12 mx-auto py-3 mb-16">
            <button className="border shadow-md px-2 py-1" onClick={handleback}>Back</button>
            {Loading?<Spinner/>:

                blog ?

                <div className="max-w-[530px] w-11/12 mx-auto py-3 mb-16">
                <Blog Post={blog}/>
               <p className="text-3xl font-bold"> Related Posts</p>
               
                {
                    relatedBlogs.map((Post)=>{
                        return <Blog key={Post.id} Post={Post}/>
                    })
                }

            </div>
            :<div>No Blog Found</div>
            }
        </div>

    );
}
export default Blogtitle;