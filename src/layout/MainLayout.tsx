import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full ">
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
