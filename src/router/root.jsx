
import { Suspense,lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CartPage from "../pages/CartPage";


const MainPage = lazy(()=>import("../pages/MainPage"))
const LoadingPage = lazy(()=>import("../pages/LoadingPage"))


const root = createBrowserRouter([
    {
        path:'/main',
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
    {
        path:'/signUp',
        element:(
            <Suspense fallback={<LoadingPage/>}>
                <SignUpPage/>
            </Suspense>
        )
    },
    {
        path:'/cart',
        element:(
            <Suspense fallback={<LoadingPage/>}>
                <CartPage/>
            </Suspense>
        )
    },


])

export default root;