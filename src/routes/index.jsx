import CommunityManagerPage from "../features/CommunityManagerPage";
import Login from "../features/Login";
import {Children} from "react";
import ChatConnection from "../features/ChatConnection";

export const Routes = [

    {
        path: "/CommunityManagerPage",
        element: <CommunityManagerPage/>
    }, {
        path: "/login",
        element: <Login/>
    }, {
        path: "/chatConnection",
        element: <ChatConnection/>
    }

]
export default Routes