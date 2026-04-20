
import { Suspense,lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


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
    },])

export default root;