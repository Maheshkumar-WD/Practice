import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import BlogPage from "../Pages/BlogPage";

const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/blogs",
        element: <BlogPage />,
        children: [
          {
            path: ":id",
            element: <h1>Single Blog Page</h1>,
            children: [{ path: "edit", element: <h1>blog edit page</h1> }],
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <h1>signup Page</h1>,
      },
      { path: "/user/:userId", element: <h1>User Page</h1> },
    ],
  },
]);
const AllRoutes = ({ children }) => (
  <RouterProvider router={RootRoutes}>{children}</RouterProvider>
);

export { AllRoutes };
