import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <main className="max-w-[1170px] w-full mx-auto flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
