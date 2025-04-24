
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 bg-ahaarsetu-cream/50">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/lovable-uploads/aa55d1cc-6f0b-4feb-a01e-09ec4154d9ff.png" 
            alt="AhaarSetu Logo" 
            className="h-24 mx-auto mb-6"
          />
          <h1 className="text-5xl font-bold mb-4 text-ahaarsetu-brown">404</h1>
          <p className="text-xl text-ahaarsetu-brown/80 mb-8">Oops! Page not found</p>
          
          <Button className="bg-ahaarsetu-orange hover:bg-ahaarsetu-orange/90 text-white" asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
