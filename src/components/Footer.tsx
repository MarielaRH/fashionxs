import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="relative ">
      <div className="h-[70px] bg-black flex justify-center items-center gap-3 text-white w-full p-5 absolute bottom-full">
        <span>Made by Mariela Rivas</span>
        <LinkedIn fontSize="medium" />
        <GitHub fontSize="medium" />
      </div>
    </footer>
  );
};

export default Footer;
