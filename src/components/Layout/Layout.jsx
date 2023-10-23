import { Outlet } from 'react-router-dom'
import CustomLink from '../Custome-link/CustomLink'
import '../Layout/layout.css'

// const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {
  return (
    <>
    <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
    </header>

    <div className="container">
      <Outlet/>
    </div>
    <footer>ReactRouterDom 2023</footer>
    </>
  )
}

export default Layout