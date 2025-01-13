import Footer from "./_components/footer";
import { Navbar } from "./_components/navbar";




const SiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
     
      <Footer />
    </>
  );
};

export default SiteLayout;
