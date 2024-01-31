import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import Layout from "./Layout.tsx";

import Home from "./pages/Home.tsx";
import Plan from "./pages/Plan.tsx";
import Tour from "./pages/Tour.tsx";
import About from "./pages/About.tsx";
import Legal from "./pages/Legal.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import UserProfile from "./pages/UserProfile.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="plan" element={<Plan />} />
      <Route path="tour" element={<Tour />} />
      <Route path="about" element={<About />} />
      <Route path="legal" element={<Legal />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="user_profile" element={<UserProfile />} />
      <Route path="*" element={<div>404 Page not found.</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);