import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, HomeLayout, Landing, ChatApp } from "./pages";
import { ErrorElement } from "./components";

// actions


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "chats",
        element: <ChatApp />,
        errorElement: <ErrorElement />,
  
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
