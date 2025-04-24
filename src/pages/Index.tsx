
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import EventCard from "@/components/EventCard";
import { events } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Display only 3 most recent events on the home page
  const recentEvents = events.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <HowItWorks />
        
        {/* Featured Events Section */}
        <section className="py-16 bg-ahaarsetu-cream/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Latest Food Donations</h2>
              <Button variant="outline" className="border-ahaarsetu-orange text-ahaarsetu-orange hover:bg-ahaarsetu-orange hover:text-white" asChild>
                <Link to="/charity/browse">View All</Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentEvents.map((event) => (
                <EventCard 
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  location={event.location}
                  date={event.date}
                  time={event.time}
                  servings={event.servings}
                  hostName={event.hostName}
                />
              ))}
            </div>
          </div>
        </section>
        
        <Stats />
        
        {/* Call to Action Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Food Sharing Movement</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a food provider with surplus or a charity helping those in need,
              AhaarSetu can help you make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-ahaarsetu-orange hover:bg-ahaarsetu-orange/90 text-white px-8 py-6 text-lg" asChild>
                <Link to="/register">Register Now</Link>
              </Button>
              
              <Button variant="outline" className="border-ahaarsetu-brown text-ahaarsetu-brown hover:bg-ahaarsetu-brown hover:text-white px-8 py-6 text-lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
