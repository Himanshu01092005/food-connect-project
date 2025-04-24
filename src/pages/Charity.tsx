
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import EventCard from "@/components/EventCard";
import { events } from "@/data/mockData";

const Charity = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-ahaarsetu-cream py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Charity Dashboard</h1>
                <p className="text-lg">Find and request surplus food for your organization.</p>
              </div>
              
              <Button className="mt-4 md:mt-0 bg-ahaarsetu-green hover:bg-ahaarsetu-green/90 text-white" asChild>
                <Link to="/charity/browse">Browse All Events</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Search Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader>
                <CardTitle>Find Food Donations</CardTitle>
                <CardDescription>Search for available food donations in your area</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City or District" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  
                  <div className="flex items-end">
                    <Button className="w-full bg-ahaarsetu-orange hover:bg-ahaarsetu-orange/90 text-white">
                      <Search className="mr-2 h-4 w-4" /> Search
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Available Events Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Upcoming Available Donations</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.slice(0, 3).map(event => (
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
            
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-ahaarsetu-green text-ahaarsetu-green hover:bg-ahaarsetu-green hover:text-white" asChild>
                <Link to="/charity/browse">View All Available Donations</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Tips Section */}
        <section className="py-8 bg-ahaarsetu-cream/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Tips for Charities</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Food Pickup Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Bring clean containers if the donor hasn't packaged the food</li>
                    <li>Arrive at the scheduled pickup time - punctuality is important</li>
                    <li>Bring insulated bags or coolers for transportation</li>
                    <li>Check the food quality before accepting</li>
                    <li>Provide feedback after distribution to help improve the process</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Distribution Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Distribute food as soon as possible after pickup</li>
                    <li>Maintain proper hygiene during reheating and serving</li>
                    <li>Keep records of food received and distributed</li>
                    <li>Consider dietary restrictions of your beneficiaries</li>
                    <li>Follow food safety guidelines to prevent foodborne illness</li>
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

export default Charity;
