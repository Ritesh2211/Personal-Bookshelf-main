import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BookShelf from "./pages/BookShelf";
import ErrorPage from "./pages/ErrorPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import AuthorDetailsPage from "./pages/AuthorDetailsPage";

//Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bookshelf",
    element: <BookShelf />,
  },
  {
    path: "/bookdetails/:bookKey/:id",
    element: <BookDetailsPage />,
  },
  {
    path: "/author/:authorKey",
    element: <AuthorDetailsPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
