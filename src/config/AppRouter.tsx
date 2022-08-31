import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Main } from "../pages/Main/Main"
import Planning from "../pages/Planning/Planning"
import { SignIn } from "../pages/SignIn/SignIn"

export const AppRouter = () => {
  return (<Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/plan" element={<Planning />} />
    </Routes>
  </Router>)
}