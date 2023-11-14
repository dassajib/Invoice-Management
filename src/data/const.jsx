import { AiOutlineDashboard } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import { LiaSitemapSolid } from "react-icons/lia";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { FcOrganization } from "react-icons/fc";

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
    icon: <FcOrganization />,
  },
  {
    name: "uom",
    label: "UOM",
    path: "/dashboard/uom",
    icon: <AiOutlineDeploymentUnit />,
  },
  {
    name: "item",
    label: "Item",
    path: "/dashboard/item",
    icon: <LiaSitemapSolid />,
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
