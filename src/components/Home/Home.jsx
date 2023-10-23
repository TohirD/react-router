import '../assets/global.css'
import { Routes, Route, Navigate} from 'react-router-dom'
import Aboutpage from '../pages/Aboutpage'
import Blogpage from '../pages/Blogpage'
import Homepage from '../pages/Homepage'
import Notfoundpage from '../pages/Notfoundpage'
import Editpost from '../pages/Editpost'
import Createpost from '../pages/Createpost'
import Singlepage from '../pages/Singlepage'
import Layout from '../Layout/Layout'
import Loginpage from '../pages/Loginpage'
import RequireAuth from '../../hoc/RequireAuth'
import { AuthProvider } from '../../hoc/AuthProvider'

const Home = () => {
  return (
    <AuthProvider>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='/about' element={<Aboutpage/>}/>
            <Route path='/about-us' element={<Navigate to='/about' replace/>}/>
            <Route path='/posts' element={<Blogpage/>}/>
            <Route path='/posts/:id' element={<Singlepage/>}/>
            <Route path='/posts/:id/edit' element={<Editpost/>}/>
            <Route path='/posts/new' element={
              <RequireAuth>
                <Createpost/>
              </RequireAuth>
            }/>
            <Route path='/login' element={<Loginpage/>}/>
            <Route path='*' element={<Notfoundpage/>}/>
            </Route>
        </Routes>
    </AuthProvider>
        
  )
}

export default Home