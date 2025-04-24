
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Utensils, Check } from "lucide-react";
import { events } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<any>(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [notes, setNotes] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Find the event in our mock data
    const foundEvent = events.find(e => e.id.toString() === id);
    
    if (foundEvent) {
      setEvent(foundEvent);
    }
  }, [id]);
  
  const handleRequest = () => {
    setIsRequesting(true);
    
    // Simulate API request
    setTimeout(() => {
      toast({
        title: "Request Submitted!",
        description: "The event host has been notified of your pickup request.",
      });
      setIsRequesting(false);
      
      // In a real app, you'd redirect to a confirmation page or dashboard
      navigate("/charity");
    }, 1000);
  };
  
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4 text-center">
            <p>Loading event details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            &larr; Back
          </Button>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Details */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{event.name}</h1>
                <p className="text-ahaarsetu-brown/70">Hosted by {event.hostName}</p>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-ahaarsetu-orange/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-ahaarsetu-orange" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-ahaarsetu-brown/70">{event.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-ahaarsetu-green/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-ahaarsetu-green" />
                    </div>
                    <div>
                      <p className="font-medium">Date & Time</p>
                      <p className="text-ahaarsetu-brown/70">{event.date} at {event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-ahaarsetu-orange/10 p-2 rounded-full">
                      <Utensils className="h-5 w-5 text-ahaarsetu-orange" />
                    </div>
                    <div>
                      <p className="font-medium">Food Available</p>
                      <p className="text-ahaarsetu-brown/70">{event.servings} servings estimated</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Food Details</CardTitle>
                  <CardDescription>Information about the food available for donation</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Menu Items:</h3>
                      <ul className="mt-2 pl-5 list-disc space-y-1">
                        <li>Mixed vegetable curry</li>
                        <li>Rice dishes</li>
                        <li>Bread/roti</li>
                        <li>Desserts</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Dietary Information:</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-ahaarsetu-orange/10 text-ahaarsetu-orange text-sm rounded-full">Vegetarian</span>
                        <span className="px-2 py-1 bg-ahaarsetu-green/10 text-ahaarsetu-green text-sm rounded-full">Non-Vegetarian</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Notes:</h3>
                      <p className="mt-1 text-ahaarsetu-brown/70">Food will be packaged in disposable containers.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Request Pickup Form */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Request Pickup</CardTitle>
                  <CardDescription>Fill in the details to request this food donation</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Pickup Details</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-ahaarsetu-green" />
                        <p className="text-sm">Pickup time: After {event.time}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-ahaarsetu-green" />
                        <p className="text-sm">Bring your own containers (optional)</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-ahaarsetu-green" />
                        <p className="text-sm">Confirm number of servings on arrival</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="notes" className="font-medium">Special Instructions</label>
                    <Textarea 
                      id="notes" 
                      placeholder="Any special requests or information for the donor"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-ahaarsetu-green hover:bg-ahaarsetu-green/90 text-white"
                    onClick={handleRequest}
                    disabled={isRequesting}
                  >
                    {isRequesting ? "Processing..." : "Request Pickup"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail;
