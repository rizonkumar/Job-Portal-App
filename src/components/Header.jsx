import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="h-20" />
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </>
  );
};

export default Header;
