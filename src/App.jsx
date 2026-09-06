import { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getMe } from "./features/auth/authSlice";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(getMe());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Customer routes */}
        <Route element={<ProtectedRoute />}>{/* We'll add these soon */}</Route>

        {/* Restaurant owner routes */}
        <Route element={<ProtectedRoute allowedRoles={["restaurant_owner"]} />}>
          {/* Owner pages */}
        </Route>

        {/* Admin routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          {/* Admin pages */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
