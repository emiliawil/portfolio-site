import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <p>{props.date}</p>

      <Link href={`/blog/posts/${props.slug}`}>
        <h2 className="font-bold underline">{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;