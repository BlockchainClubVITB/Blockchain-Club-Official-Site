import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
<<<<<<< HEAD
import React, { lazy } from "react";
=======
import { lazy } from "react";
>>>>>>> ec3cdb5 (Initial commit with website changes)
import {
  About,
  Contact,
  Events,
  EventImages,
  BlogHome,
  BlogPost,
  TeamDetails,
} from "./components";
import Layout from "./Layout";
import "./App.css";
import Preloader from "./components/Preloader";
const Hero = lazy(() => import("./components/Hero"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:name" element={<TeamDetails />} />
        <Route exact path="/blog" element={<BlogHome />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:name" element={<EventImages />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <>
      <Preloader />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
