import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import SolutionProjectAdmin from "../pages/SolutionProjectAdmin";
import SolutionFinancialAdmin from "../pages/SolutionFinancialAdmin";
import SolutionRelationshipMgmt from "../pages/SolutionRelationshipMgmt";
import SolutionMeetingModule from "../pages/SolutionMeetingModule";
import SolutionDocumentVault from "../pages/SolutionDocumentVault";
import OurClients from "../pages/OurClients";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home />, handle: { title: "Home" } },
      {
        path: "solutions",
        children: [
          {
            path: "project-administration",
            element: <SolutionProjectAdmin />,
            handle: { title: "Projectadministratie" },
          },
          {
            path: "financial-administration",
            element: <SolutionFinancialAdmin />,
            handle: { title: "Financiële Administratie" },
          },
          {
            path: "relationship-management",
            element: <SolutionRelationshipMgmt />,
            handle: { title: "Relatiebeheer" },
          },
          {
            path: "meeting-module",
            element: <SolutionMeetingModule />,
            handle: { title: "Vergadermodule" },
          },
          {
            path: "document-vault",
            element: <SolutionDocumentVault />,
            handle: { title: "Documentkluis" },
          },
        ],
      },
      {
        path: "clients",
        element: <OurClients />,
        handle: { title: "Onze Klanten" },
      },
      {
        path: "about",
        element: <AboutUs />,
        handle: { title: "Over Ons" },
      },
      {
        path: "contact",
        element: <Contact />,
        handle: { title: "Contact" },
      },
    ],
  },
]);
