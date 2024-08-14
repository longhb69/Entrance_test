export default function Post({ post }) {
    return (
        <li>
            <div className='post-container'>
            <div className='user'>
                <div className='info'>
                <p>User Id:</p>
                <p>{post.userId}</p>
                </div>
                <div className='info'>
                <p>Id:</p>
                <p>{post.id}</p>
                </div>
            </div>
            <div className='content'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            </div>
        </li>
    )
}