export default function AddPostButton({ setShowAddPost, showAddPost })  {
    return (
        <div className='add-post-container'>
            <div 
            className='showFormButton'
            onClick={() => setShowAddPost(!showAddPost)}
            style={{ backgroundColor: showAddPost ? 'red' : '', borderRadius: showAddPost ? '20px' : '100%', }}
            >
                <svg className='plus-icon' aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" style={{transform: showAddPost ? 'rotate(48deg)' : 'rotate(0deg)',}}>
                <path fill="currentColor" d="M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z" class=""></path>
                </svg>
            </div>
            <div className='hover-add-post'>{showAddPost ? 'Close' : 'Add Post'}</div>
        </div>
    )
}