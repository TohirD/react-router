import { Link, useNavigate, useSearchParams} from "react-router-dom"
import { useState, useEffect } from "react"

const Blogpage = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const postQuery = searchParams.get('post') || ''

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const query = form.search.value

    setSearchParams({post: query})
  }


  const goforward = () => navigate(1)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

  return (
    <div>
      <h1>Our News</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <input type="submit" value='search' />
      </form>
      <Link to='/posts/new'>Add Post</Link>
      <button onClick={goforward}>Go forward</button>
      {
        posts.filter(
          post => post.title.includes(postQuery)
        ).map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

export default Blogpage