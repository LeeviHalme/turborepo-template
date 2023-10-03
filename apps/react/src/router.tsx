import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./views/Homepage";
import AnotherPage from "./views/AnotherPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/another-page",
        element: <AnotherPage />,
      },
    ],
  },
]);
