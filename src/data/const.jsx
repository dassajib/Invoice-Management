import { AiOutlineDashboard } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";

export const SIDEBAR_NAVIGATION_ELEMENETS = [
  {
    name: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    name: "create-invoice",
    label: "Create Invoice",
    path: "/dashboard/create-invoice",
    icon: <TbFileInvoice />,
  },
  {
    name: "company",
    label: "Company",
    path: "/dashboard/company",
    icon: <TbFileInvoice />,
  },
  {
    name: "uom",
    label: "UOM",
    path: "/dashboard/uom",
    icon: <TbFileInvoice />,
  },
  {
    name: "item",
    label: "Item",
    path: "/dashboard/item",
    icon: <TbFileInvoice />,
  },
  {
    name: "invoice",
    label: "Invoice",
    path: "/dashboard/invoice",
    icon: <TbFileInvoice />,
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
