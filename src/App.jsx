import React from 'react'
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import OnBoarding from './pages/Onboarding';
import JobPage from './pages/Jobs';
import JobListing from './pages/Joblisting';
import PostJobs from './pages/Postjobs';
import SavedJobs from './pages/Savedjobs';
import MyJobs from './pages/Myjobs';
import { ThemeProvider } from './components/ui/theme-provider';
import ProtectedRoute from './components/ui/protected-route';

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage />
      },
      {
        path:'/onboarding',
        element:(
          <ProtectedRoute>
            <OnBoarding />
          </ProtectedRoute>
        )
      },
      {
        path:'/job/:id',
        element:(
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        )
      },
      {
        path:'/jobs',
        element:(
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        )
      },
      {
        path:'/post-jobs',
        element:(
          <ProtectedRoute>
           <PostJobs /> 
          </ProtectedRoute>
        )
      },
      {
        path:'/saved-jobs',
        element:(
          <ProtectedRoute>
           <SavedJobs /> 
          </ProtectedRoute>
        )
      },
      {
        path:'/my-jobs',
        element:(
          <ProtectedRoute>
           <MyJobs /> 
          </ProtectedRoute>
        )
      }
    ]
  }
])
const App = () => {
  return <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <RouterProvider router={router} />
  </ThemeProvider>
  
  
}

export default App

