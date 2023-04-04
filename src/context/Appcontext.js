import axios from "axios";
import {  createContext, useState } from "react";
import {baseUrl} from "../baseUrl";
import { useNavigate } from "react-router-dom";
export const Appcontext = createContext();

 export default function AppcontextProvider({children}){
    const [Loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPage , setTotalPage] = useState(null);
    const navigate = useNavigate();
    async function fetchPost(page= 1 , tag=null,category=null){
        
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;
        if(category)
        {
            url += `&category=${category}`;
        }
        else if(tag)
        {
            url  = `&tag=${tag}`;
        }

        try{
            console.log(url);
            const output = await axios.get(url);
            console.log(output);
            setPosts(output.data.posts);
            setPage(output.data.page);
            setTotalPage(output.data.totalPages);
        }
        catch(err){
            console.log(err);
            setPosts([]);
            setPage(1);
            setTotalPage(null);
        }
        setLoading(false);
    }

    const handleChange = (page)=>{
        navigate(  `?page=${page}`);
        setPage(page);
        // fetchPost(page)
    }
    const value = {
        Loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchPost,
        handleChange,
    };

    return <Appcontext.Provider value={value}>
            {children}
    </Appcontext.Provider>
}