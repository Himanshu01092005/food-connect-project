
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Stats from "@/components/Stats";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-ahaarsetu-cream to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AhaarSetu</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Connecting excess food from events to those who need it most.
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/aa55d1cc-6f0b-4feb-a01e-09ec4154d9ff.png" 
                  alt="AhaarSetu Mission" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg">
                  AhaarSetu aims to bridge the gap between food surplus and scarcity. In India, where millions go hungry 
                  every day, events like weddings and parties often have substantial food waste. Our platform connects 
                  these event hosts with local NGOs, old age homes, and food banks to ensure that good quality surplus 
                  food reaches those who need it most.
                </p>
                <p className="text-lg">
                  We believe that technology can be a powerful tool in addressing hunger and reducing food waste. 
                  By creating a simple connection platform, we enable both sides to make a difference with minimal effort.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Impact Stats */}
        <Stats />
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-lg">
                  AhaarSetu began when our founder noticed the significant amount of food wasted after a family wedding. 
                  Despite wanting to donate the food, there was no easy way to find nearby organizations that could accept 
                  and distribute it quickly.
                </p>
                <p className="text-lg">
                  What started as a small WhatsApp group connecting a few venues with local NGOs has grown into a 
                  full-fledged platform serving multiple cities across India. Our team is committed to making food 
                  sharing as seamless as possible while ensuring food safety and dignity for all recipients.
                </p>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="bg-ahaarsetu-orange/10 p-8 rounded-lg">
                  <blockquote className="text-lg italic">
                    "In a country where millions go hungry every day, we can't afford to waste food from parties and events. 
                    AhaarSetu is our simple contribution toward solving this disconnect."
                    <footer className="mt-4 text-ahaarsetu-brown font-medium">
                      - AhaarSetu Founder
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section className="py-16 bg-ahaarsetu-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Movement</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you're an event host, caterer, NGO, or someone passionate about reducing food waste,
              there's a place for you in the AhaarSetu community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-ahaarsetu-orange hover:bg-ahaarsetu-orange/90 text-white px-8 py-6 text-lg" asChild>
                <Link to="/register">Register Now</Link>
              </Button>
              
              <Button variant="outline" className="border-ahaarsetu-green text-ahaarsetu-green hover:bg-ahaarsetu-green hover:text-white px-8 py-6 text-lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
