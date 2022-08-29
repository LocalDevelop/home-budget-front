import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Main } from "../pages/Main/Main"
import { SignIn } from "../pages/SignIn/SignIn"

export const AppRouter = () => {
  return (<Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  </Router>)
}