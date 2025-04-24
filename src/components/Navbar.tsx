
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/aa55d1cc-6f0b-4feb-a01e-09ec4154d9ff.png" alt="AhaarSetu Logo" className="h-12" />
            <span className="text-ahaarsetu-brown text-xl font-bold">AhaarSetu</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-ahaarsetu-brown hover:text-ahaarsetu-orange transition">Home</Link>
          <Link to="/about" className="text-ahaarsetu-brown hover:text-ahaarsetu-orange transition">About</Link>
          <Link to="/host" className="text-ahaarsetu-brown hover:text-ahaarsetu-orange transition">For Hosts</Link>
          <Link to="/charity" className="text-ahaarsetu-brown hover:text-ahaarsetu-orange transition">For Charities</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button className="bg-ahaarsetu-orange hover:bg-ahaarsetu-orange/90 text-white" asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
