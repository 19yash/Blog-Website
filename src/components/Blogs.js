import React, { useContext } from "react"
import { Appcontext } from "../context/Appcontext";
import Blog from "./Blog";
import Spinner from "./Spinner";

const Blogs = () => {

    const { posts, Loading } = useContext(Appcontext);

    return (
        <div>
            {

                Loading ? <Spinner /> :
                    posts.length === 0 ? <div>No Blog Found</div> :

                        <div className="max-w-[530px] w-11/12 mx-auto py-3 mb-16">
                            {

                                posts.map((Post) => (
                                    <Blog key={Post.id} Post={Post}></Blog>
                                ))
                            }
                        </div>
            }
        </div>
    );


}

export default Blogs;