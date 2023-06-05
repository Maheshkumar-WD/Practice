import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import BlogPage from "../Pages/BlogPage";
import SignupForm from "../Components/LoginSignUp/SignupForm";

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
            loader: () => {
              // fetch single blog Data and dispatch an action
              return true;
            },
          },
        ],
        loader: () => {
          // fetch blogs data and dispatch an action
          return true;
        },
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
      { path: "/user/:userId", element: <h1>User Page</h1> },
    ],
  },
]);
const AllRoutes = ({ children }) => (
  <RouterProvider router={RootRoutes}>{children}</RouterProvider>
);

export { AllRoutes };
