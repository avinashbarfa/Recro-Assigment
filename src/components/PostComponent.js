
const PostComponent = ({data: posts}) => {

    return (
        <div className={"post-section"}>
            {posts.map(post => {
                return (
                    <div className={"post"} key={post.id} id={post.id}>
                        <h4>{post.title}</h4>
                        <hr/>
                        <p>{post.body}</p>
                    </div>
                )
        })}
        </div>

    );
};

export default PostComponent;
