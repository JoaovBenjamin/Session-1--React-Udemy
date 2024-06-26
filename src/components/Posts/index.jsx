import { PostCard } from "../PostCard"
import "./styles.css"

export const Posts = ({post}) => {
    return(
    <div className="posts">
        {post.map(post => (
            <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            cover={post.cover}
            />
        ))}
    </div>
    )
}