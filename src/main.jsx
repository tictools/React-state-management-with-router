import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AnecdoteSection, FeedbackSection } from "./routes";

import "./index.css";
import "./sanitize.css";
import "./utilities.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/feedback",
        element: <FeedbackSection />,
      },
      {
        path: "/anecdotes",
        element: <AnecdoteSection />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
