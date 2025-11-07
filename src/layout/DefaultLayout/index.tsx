import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <Header />
      <main className="bg-[#FCFCFC] dark:bg-[#131723]">
        <Outlet /> {/* child routes render here */}
      </main>
      <Footer />
    </>
  );
}
