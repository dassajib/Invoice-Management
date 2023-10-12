import { AiOutlineDashboard } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import { LiaSignInAltSolid } from "react-icons/lia";

export const SIDEBAR_NAVIGATION_ELEMENETS = [
  {
    name: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <AiOutlineDashboard />,
  },
  {
    name: "create-invoice",
    label: "Create Invoice",
    path: "/create-invoice",
    icon: <TbFileInvoice />,
  },
  {
    name: "signin",
    label: "Sign In",
    path: "/sign-in",
    icon: <LiaSignInAltSolid />,
  },
];

export const DASHBOARD_CARD_DATA = [
  {
    id: 1,
    cardName: "Sales",
    amount: 50,
  },
  {
    id: 2,
    cardName: "Downloaded",
    amount: 500,
  },
  {
    id: 3,
    cardName: "Business",
    amount: 5000,
  },
];
