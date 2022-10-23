import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./Components/Homepage";
import PeoplesPosts from "./Components/peoplespost";
import ErrorPage from "./Components/Errorpage";
import DetailsAboutPosts from "./Components/Detailedpost";
import RegisterForm from "./Components/Register";
import LoginForm from "./Components/Login";
import IndexForHomePage from "./Components/indexhomepage";
import ProfilePage from "./Components/Profile";
import CreateYourOwnPosts from "./Components/CreatePosts";
import MessageForm from "./Components/MessageForm";
import EditMyPost from "./Components/EditForm";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <IndexForHomePage />
            },
            {
                path: "/posts",
                element: <PeoplesPosts />
            },
            {
                path: "/posts/:id",
                element: <DetailsAboutPosts />
            },
            {
                path: "/register",
                element: <RegisterForm />
            },
            {
                path: "/login",
                element: <LoginForm />
            },
            {
                path: "/profile",
                element: <ProfilePage />
            },
            {
                path: "/createpost",
                element: <CreateYourOwnPosts />
            },
            {
                path: "/messageform/:id",
                element: <MessageForm />
            },
            {
                path: "/editpost/:id",
                element: <EditMyPost />
            }
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("apps"))