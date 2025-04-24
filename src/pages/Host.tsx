
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Utensils } from "lucide-react";
import { events } from "@/data/mockData";

const Host = () => {
  // Mock data for a host's events
  const hostEvents = events;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-ahaarsetu-cream py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Host Dashboard</h1>
                <p className="text-lg">Manage your food donation events and track pickups.</p>
              </div>
              
              <Button className="mt-4 md:mt-0 bg-ahaarsetu-orange hover:bg-ahaarsetu-orange/90 text-white" asChild>
                <Link to="/host/new-event">Create New Event</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Events Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Your Events</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hostEvents.map(event => (
                <Card key={event.id} className="border-2 hover:border-ahaarsetu-orange transition-all">
                  <CardHeader className="bg-ahaarsetu-orange/5 pb-2">
                    <CardTitle className="text-lg">{event.name}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-ahaarsetu-green" />
                      <p className="text-sm">{event.location}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-ahaarsetu-green" />
                      <p className="text-sm">{event.date} at {event.time}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Utensils className="h-4 w-4 text-ahaarsetu-green" />
                      <p className="text-sm font-medium">{event.servings} servings available</p>
                    </div>
                    
                    <div className="mt-2 p-2 bg-ahaarsetu-green/10 rounded-md">
                      <p className="text-sm text-ahaarsetu-green font-medium">
                        2 charities have requested pickup
                      </p>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button variant="outline" className="w-full border-ahaarsetu-brown text-ahaarsetu-brown hover:bg-ahaarsetu-brown hover:text-white" asChild>
                      <Link to={`/host/${event.id}`}>Manage Event</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tips Section */}
        <section className="py-8 bg-ahaarsetu-cream/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Tips for Food Providers</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Food Safety Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ensure food is properly cooled before packaging</li>
                    <li>Use clean, food-grade containers for storage</li>
                    <li>Label containers with the preparation date and contents</li>
                    <li>Store food at appropriate temperatures until pickup</li>
                    <li>Avoid donating items that have been left at room temperature for over 2 hours</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Planning for Donation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>List your event at least 3 days in advance if possible</li>
                    <li>Provide accurate estimates of servings available</li>
                    <li>Designate a specific area for charity pickup</li>
                    <li>Consider having extra containers on hand for easier transportation</li>
                    <li>Assign a point person to coordinate with the charity on the day of the event</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Host;
