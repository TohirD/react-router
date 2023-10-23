import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

const Singlepage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    const goback = () => navigate(-1)
    const gohome = () => navigate('/', {replace: true})

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

  return (
    <div>
      <button onClick={goback}>Go back</button>
      <button onClick={gohome}>Go home</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div> 
  )
}

export default Singlepage