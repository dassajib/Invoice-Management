import {AiOutlineDashboard} from "react-icons/ai";
import {TbFileInvoice} from "react-icons/tb";
import {LiaSignInAltSolid} from "react-icons/lia";

export const SIDEBAR_NAVIGATION_ELEMENETS = [
    {
        name: 'dashboard',
        label: "Dashboard",
        path: "/",
        icon: <AiOutlineDashboard />,
    },
    {
        name: 'create-invoice',
        label: "Create Invoice",
        path: "/create-invoice",
        icon: <TbFileInvoice />,
    },
    {
        name: 'signin',
        label: "Sign In",
        path: "/sign-in",
        icon: <LiaSignInAltSolid />,
    }
]