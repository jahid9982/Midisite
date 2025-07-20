import { RouterProvider } from "react-router-dom"
import Hero from "./Pages/Home/Hero"
import Home from "./Pages/Home/Home"
import Footer from "./Pages/Shared/Footer/Footer"
import Header from "./Pages/Shared/Header/Header"
import router from "./route/Router"
import { DayPicker } from 'react-day-picker';
import "react-day-picker/style.css";
function App({ children }) {


  return (
    <RouterProvider router={router}>
      {children}
    </RouterProvider>
  )
}

export default App
