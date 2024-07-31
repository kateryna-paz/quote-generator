import FooterNav from "./footerNav";
import FooterSection from "./footerSection";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 px-8 ">
      <div className="flex flex-row justify-between">
        <FooterNav />
        <FooterSection />
      </div>
    </footer>
  );
};

export default Footer;
