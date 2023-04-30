import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

function Layout() {
  return(
    <div>

      <Outlet />
    </div>
  )
}
