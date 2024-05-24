import { createContext, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import BookForm from "./components/BookForm/BookForm";
import Table from "./components/BookTable/Table";
import Collections from "./components/Collections/Collections";
import HomeBody from "./components/HomeBody/HomeBody";
import ContinueLogin from "./components/Login/ContinueLogin";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Nav from "./components/Navbar/Nav";
export const UserContext = createContext(null);
export const loginContext = createContext(() => {});
function App() {
  const [loggedInUser, setLoggedInUer] = useState({});

  return (
    <div className="bg-white">
      <UserContext.Provider value={[loggedInUser, setLoggedInUer]}>
        <Nav />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeBody />}></Route>

          <Route
            path="/collections"
            element={
              <PrivateRoute>
                <Collections />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<ContinueLogin />} />
          <Route
            path="/addBook"
            element={
              <PrivateRoute>
                <BookForm />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/listBooks" element={<Table />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
