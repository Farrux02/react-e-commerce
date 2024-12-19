import Header from "@/components/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="max-w-[1170px] mx-auto">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
