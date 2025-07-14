import React from "react";
import Posts from "./Posts";

const Feed = () => {
return (
    <div className="flex-1 my-8 flex flex-col items-center justify-center">
        <Posts />
        {console.log("Feed")}
    </div>
);
};

export default Feed;