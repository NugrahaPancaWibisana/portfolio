import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-1 place-items-center">{children}</main>
      <Footer />
    </>
  );
}
