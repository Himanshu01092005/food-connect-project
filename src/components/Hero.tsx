
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-ahaarsetu-cream to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ahaarsetu-brown">
              Connect Surplus Food with Those in Need
            </h1>
            
            <p className="text-xl text-ahaarsetu-brown/80">
              AhaarSetu bridges the gap between food providers and charities, ensuring that surplus food reaches those who need it most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-ahaarsetu-orange hover:bg-ahaarsetu-orange/90 text-white px-8 py-6 text-lg" asChild>
                <Link to="/host">I'm a Food Provider</Link>
              </Button>
              
              <Button className="bg-ahaarsetu-green hover:bg-ahaarsetu-green/90 text-white px-8 py-6 text-lg" asChild>
                <Link to="/charity">I'm a Charity</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-ahaarsetu-orange/20 rounded-full blur-3xl"></div>
              <img 
                src="/lovable-uploads/aa55d1cc-6f0b-4feb-a01e-09ec4154d9ff.png" 
                alt="AhaarSetu Logo" 
                className="relative w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
