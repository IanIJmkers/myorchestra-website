import { Outlet, useLocation, useMatches } from "react-router";
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BASE_TITLE = "MyOrchestra";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function DocumentTitle() {
  const matches = useMatches();
  const match = [...matches].reverse().find((m) => m.handle?.title);

  useEffect(() => {
    const title = match?.handle?.title;
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
  }, [match]);

  return null;
}

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <DocumentTitle />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
