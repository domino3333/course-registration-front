
import { Suspense,lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";


const MainPage = lazy(()=>import("../pages/MainPage"))
const LoadingPage = lazy(()=>import("../pages/LoadingPage"))


const root = createBrowserRouter([
    {
        path:'/',
        element:(
            <Suspense fallback={<LoadingPage/>}>
                <MainPage/>
            </Suspense>
        )
    },
    {
        path:'/login',
        element:(
            <Suspense fallback={<LoadingPage/>}>
                <LoginPage/>
            </Suspense>
        )
    },


])

export default root;