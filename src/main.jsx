import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./Pages/Dashboard";
import Team from "./Pages/Team";
import Contacts from "./Pages/Contacts";
import Invoices from "./Pages/Invoices";
import Profile from "./Pages/Profile";
import Calendar from "./Pages/Calendar";
import Bar from "./Pages/Bar";
import Question from "./Pages/Question";
import Pie from "./Pages/Pie";
import Line from "./Pages/Line";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RadialBar from "./Pages/RadialBar.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Profile />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Question />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="radialBar" element={<RadialBar />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
