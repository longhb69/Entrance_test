import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost, findMaxId } from "../redux/postSlice"

export default function PostForm({ maxId, showAddPost, setShowAddPost }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = () => {
        if(title === '' || body === '') return
        const new_post = {
            userId: 1,
            id: maxId + 1,
            title: title,
            body: body
        }
        dispatch(addPost(new_post))
        setTitle('')
        setBody('')
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value)
    };
    return (
        <>
            <div className="form" style={{ display: showAddPost ? 'flex': 'none' }}>
                <div className="flex">
                    <div className="form-title">Title: </div>
                    <input 
                        type="text" 
                        placeholder="Title"
                        value={title} 
                        class="text-field"
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="flex">
                    <div className="form-title">body: </div>
                    <textarea 
                        placeholder="Enter something" 
                        value={body}
                        class="text-area"
                        onChange={handleBodyChange}
                    />
                </div>
                <div className="button-container">
                    <button onClick={() => handleSubmit()}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}