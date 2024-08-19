import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="h-20" />
        </Link>
      </nav>
      <Button variant="outline">Login</Button>
    </>
  );
};

export default Header;
