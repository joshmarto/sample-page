import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./Components"
import { AppRouter } from "./router"


export const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}
