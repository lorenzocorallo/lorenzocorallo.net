import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Header from "./components/Header"

const router = createBrowserRouter([
  {
    path: "/",
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
  return <RouterProvider router={router} />
}

function Layout() {
  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-white">
      <Header />
      <Outlet />
    </div>
  )
}
