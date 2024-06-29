import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/Navbar'
// import Blogs from './Pages/Blogs/Blogs'
import Ourblogs from './Pages/Blogs/Ourblogs'
import Contact_us from './Pages/ContactUs/Contact_us'
import HiringDetailForm from './Pages/HireWriter/HiringDetailForm'
import Order_Technical from './Pages/HiringPages/Order_Technical'
import Order_editing from './Pages/HiringPages/Order_editing'
import Order_writing from './Pages/HiringPages/Order_writing'

import Home from './Pages/Home'
import {Route, Routes} from 'react-router-dom'
import Serviceshome from './Pages/Services/Serviceshome'
import Blogspages from './Pages/Blogs/Pages/Blogspages'
import HireClick from './Pages/HireWriter/HireClick'
function App() {
  return (
    <div className=''>    
    <Navbar/>
  
     <Routes >
           <Route path='/' element={<Home/>}/>
           <Route path='/*' element={<Home/>}/>
           <Route path='/contact-us' element={<Contact_us/>}/>
           <Route path='/order' element={<HireClick/>}/>
           <Route path='/blogs' element={<Ourblogs/>}/>
           <Route path='/orderswriting/:title' element={<Order_writing/>}/>
           <Route path='/order-technical' element={<Order_Technical/>}/>
           <Route path='/ordersediting/:title' element={<Order_editing/>}/>
            <Route path='/personaldetail/:name' element={<HiringDetailForm/>}/>
           <Route path='/order-technical/personaldetail' element={<HiringDetailForm/>}/>
           <Route path='/order-writing/personaldetail' element={<HiringDetailForm/>}/>
           <Route path='/Services/:Link' element={<Serviceshome/>} />
           <Route path='/Blogspage/:id' element={<Blogspages/>}/>
             </Routes>

    <Footer/>
    </div>
  )
}

export default App
