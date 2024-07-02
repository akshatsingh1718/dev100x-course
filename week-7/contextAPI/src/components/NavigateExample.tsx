import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
const Dashboard = React.lazy(() => import("./Dashboard"));
// import Landing from "./Landing";
const Landing = React.lazy(() => import("./Landing"));

function NavigateExample() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback="loading...">
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback="loading...">
              <Landing />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const AppBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
          // The below window.location will request server the page
          // contents and thus reload the page
          // window.location.href = "/";
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
    </>
  );
};

export default NavigateExample;
