import { Post } from "./states/posts";

const Card: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div style={cardStyles}>
            <h3 style={{fontSize: 24}}>{post.title}</h3>
            <p><span><strong>user_id:</strong> {post.userId}</span> <span><strong>post_id:</strong> {post.id}</span></p>
            <p>{post.body}</p>
        </div>
    );
};

const cardStyles: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
};

export default Card;