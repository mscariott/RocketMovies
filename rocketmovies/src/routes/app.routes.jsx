import {Routes, Route} from "react-router-dom"

import {New} from "../pages/New"
import {Home} from "../pages/Home"
import {Profile} from "../pages/Profile"
import {Preview} from "../pages/Preview"


export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview/:id" element={<Preview />} />
    </Routes>
  )
}