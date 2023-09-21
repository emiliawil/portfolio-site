import React from 'react'
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

export default function Blog() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ));
  
    return (
      <div className="flex flex-col mx-10 max-w-5xl">{postPreviews}</div>
    );
  };
