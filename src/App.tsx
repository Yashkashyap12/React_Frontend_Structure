import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes"
import { Toaster } from "sonner";
import "./http/interceptors/requestInterceptor";
import "./http/interceptors/responseInterceptor";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Toaster richColors position="top-center" closeButton />
    </>
  )
}

export default App