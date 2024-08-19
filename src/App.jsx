import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "@/layout/AppLayout.jsx";
import LandingPage from "@/pages/Landing.jsx";
import OnBoarding from "@/pages/OnBoarding.jsx";
import JobListing from "@/pages/JobListing.jsx";
import JobPage from "@/pages/Job.jsx";
import JobPost from "@/pages/JobPost.jsx";
import SavedJob from "@/pages/SavedJob.jsx";
import MyJob from "@/pages/MyJob.jsx";
import { ThemeProvider } from "@/components/theme-provider.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <OnBoarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <JobPage />,
      },
      {
        path: "/post-job",
        element: <JobPost />,
      },
      {
        path: "/saved-job",
        element: <SavedJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJob />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
