import React from "react";
import AppLayout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProgramLayout from "./components/ProgramLayout";

const App: React.FC = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    },
    {
      path: "/program",
      element: <ProgramLayout />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
