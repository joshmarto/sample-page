import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={ <Navigate to="/" replace={true} />} />
    </Routes>
  )
}
