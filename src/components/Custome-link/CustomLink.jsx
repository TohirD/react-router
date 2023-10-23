import { Link, useMatch } from "react-router-dom"

const CustomLink = ({children, to, ...props}) => {

    const match = useMatch(to)
    console.log({match})

  return (
    <div>
        <Link 
        to={to}
        style={{
            color: match ? 'rgb(34, 61, 83)' : 'white'
        }} 
        {...props }>
            {children}
        </Link>
    </div>
  )
}

export default CustomLink