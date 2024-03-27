import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const params = useParams();

  //   const postId = params.postId;
  //   console.log(params);
  return <div>Post {params.postId} Details</div>;
  //   return <div>Post {postId} Details</div>;
};

export default PostDetails;
