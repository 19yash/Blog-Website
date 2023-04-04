
import { Link } from "react-router-dom";

const Blog = ({Post}) => {
    const tags = Post.tags;
    
   
    return (

        <div className="my-6 space-y-1">
            <h2 className="font-bold text-xl" ><Link to= {`/blog/${Post.id}`}> {Post.title}</Link></h2>
            <p>{`By ${Post.author} on `}<span><Link to={`/category/${Post.category.replaceAll(" ","-")}`}>{Post.category}</Link></span></p>
            <p>{`Posted on ${Post.date}`}</p>
            <p className=" py-2"> {Post.content}</p>
            <div className="space-x-3">
           
            {
                tags.map((tag,index)=>{
                     return <span key = {index} className="text-blue-400 underline">
                        <Link to={`/tag/${tag.replaceAll(" ","-")}`}>#{tag}</Link>
                        </span>
                })
            }
             </div> 
        </div>
    )
}

export default Blog;