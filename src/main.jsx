import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Faqs from "./Faqs";
import App from "./App";
import Faq from "./Faq";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "faqs/:id",
    element: <Faq />,
  },
  {
    path: "*",
    element: <h1>No encontrado</h1>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     {/* Para deploy se cambia por createHashRouter */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path='faqs/:id' element={<Faq/>} />
        <Route path='*' element={<h1>No encontrado</h1>} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
