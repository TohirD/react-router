import { useParams } from "react-router-dom"

const Editpost = () => {
    const {id} = useParams()
  return (
    <div>Edit Post {id}</div>
  )
}

export default Editpost