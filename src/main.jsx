import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import FixLayout from './FixLayout/FixLayout'
import Home from './Home/Home'
import About from './About Us/About'
import Contact from './Contact/Contact'
import Profile from './Profile/Profile'
import Github from './Github/Github'
import { gitHubData } from './Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <FixLayout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<FixLayout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='profile/:profileId' element={<Profile />} />
      <Route
        loader={gitHubData}
        path='github'
        element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
