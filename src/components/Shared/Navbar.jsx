import Desktop from "../navbar/Desktop";
import Mobile from "../navbar/Mobile";


const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="lg:hidden">
        <Mobile />
      </div>
    </div>

  );
};

export default Navbar;