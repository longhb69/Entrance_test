import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, findMaxId } from './redux/postSlice'
import Post from './component/Post';
import PostForm from './component/PostForm';
import AddPostButton from './component/AddPostButton';



function App() {
  const dispatch = useDispatch()
  const { data, loading, error  } = useSelector(state => state.posts) 
  const [showAddPost, setShowAddPost] = useState(false)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div className="App">
      <div className='content-container'>
        <ul>
            {data.map(post => (
              <Post post={post}/>
            ))}
        </ul>
        <AddPostButton showAddPost={showAddPost} setShowAddPost={setShowAddPost}/> 
      </div>
      <PostForm maxId={findMaxId(data)} showAddPost={showAddPost} setShowAddPost={setShowAddPost}/>
    </div>
  )
}

export default App
