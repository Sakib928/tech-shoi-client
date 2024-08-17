import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },

  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);
