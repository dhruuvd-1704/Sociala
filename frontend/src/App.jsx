// import { useEffect, useState } from "react";
// import "./App.css";
// import { Button } from "./components/ui/button";
// import { Signup } from "./components/Signup";
// import { createBrowserRouter, Route, Router } from "react-router-dom";
// import path from "path";
// import { RouterProvider } from "react-router";
// import MainLayout from "./components/MainLayout";
// import Home from "./components/Home";
// import { Login } from "./components/Login";
// import Profile from "./components/Profile";
// import EditProfile from "./components/EditProfile";
// import ChatPage from "./components/ChatPage";
// import { io } from "socket.io-client";
// import { useDispatch, useSelector } from "react-redux";
// import store from "./redux/store";
// import { setSocket } from "./redux/socketSlice";
// import { setOnlineUsers } from "./redux/chatSlice";
// import socket from "socket.io-client";
// import { setLikeNotification } from "./redux/rtnSlice";
// const browserRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/profile/:id",
//         element: <Profile />,
//       },
//       {
//         path: "/account/edit",
//         element: <EditProfile />,
//       },
//       {
//         path: "/chat",
//         element: <ChatPage />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
// ]);
// function App() {
//   // const [count, setCount] = useState(0)
//   const dispatch = useDispatch();
//   const { user } = useSelector((store) => store.auth);
//   useEffect(() => {
//     if (user) {
//       const socketio = io("http://localhost:8000", {
//         query: {
//           userId: user?._id,
//         },
//         transports: ["websocket"],
//       });
//       dispatch(setSocket(socketio));

//       //listening all the events from the socket
//       socketio.on("getOnlineUsers", (onlineUsers) => {
//         dispatch(setOnlineUsers(onlineUsers));
//       });

//       socket.on("notification", (notification) => {
//         dispatch(setLikeNotification(notification));
//       });
//       //cleanup function to disconnect the socket when the component unmounts or user just leaves window ubruptly
//       return () => {
//         socketio.close();
//         dispatch(setSocket(null));
//       };
//     } else {
//       dispatch(setSocket(null));
//     }
//   }, [user, dispatch]);
//   return (
//     <>
//       {/* <Button>Hello Guys</Button> */}
//       <RouterProvider router={browserRouter} />
//     </>
//   );
// }

// export default App;

// src/App.jsx
import { useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import ChatPage from "./components/ChatPage";

import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUsers } from "./redux/chatSlice";
import { setLikeNotification } from "./redux/rtnSlice";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile/:id", element: <Profile /> },
      { path: "/account/edit", element: <EditProfile /> },
      { path: "/chat", element: <ChatPage /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    // if there's a logged-in user, connect
    if (user?._id) {
      const socketio = io("http://localhost:8000", {
        query: { userId: user._id },
        transports: ["websocket"],
      });

      // stash it in redux if you need it elsewhere
      dispatch(setSocket(socketio));

      // listen for your two events on the *instance*, not the module
      socketio.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      socketio.on("notification", (notification) => {
        dispatch(setLikeNotification(notification));
      });

      // cleanup on logout/unmount
      return () => {
        socketio.off("getOnlineUsers");
        socketio.off("notification");
        socketio.close();
        dispatch(setSocket(null));
      };
    }

    // if user becomes null, clear out any socket
    dispatch(setSocket(null));
  }, [user, dispatch]);

  return <RouterProvider router={browserRouter} />;
}

export default App;
