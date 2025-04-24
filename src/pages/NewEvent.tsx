
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const NewEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    date: "",
    time: "",
    servings: "",
    notes: ""
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would submit this data to your backend
    toast({
      title: "Event Created!",
      description: "Your event has been successfully listed for donation.",
    });
    
    // Navigate back to the host dashboard
    navigate("/host");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Create New Donation Event</h1>
            
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Event Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="e.g., Kumar Wedding Reception" 
                      value={formData.name} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Event Location</Label>
                    <Input 
                      id="location" 
                      name="location" 
                      placeholder="e.g., Shanti Palace, Delhi" 
                      value={formData.location} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Event Date</Label>
                      <Input 
                        id="date" 
                        name="date" 
                        type="date" 
                        value={formData.date} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Event Time</Label>
                      <Input 
                        id="time" 
                        name="time" 
                        type="time" 
                        value={formData.time} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="servings">Estimated Servings Available</Label>
                    <Input 
                      id="servings" 
                      name="servings" 
                      type="number" 
                      placeholder="e.g., 150" 
                      value={formData.servings} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea 
                      id="notes" 
                      name="notes" 
                      placeholder="Any special instructions or details about the food" 
                      value={formData.notes} 
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                  
                  <div className="pt-4 flex gap-4">
                    <Button 
                      type="submit" 
                      className="bg-ahaarsetu-orange hover:bg-ahaarsetu-orange/90 text-white"
                    >
                      Create Event
                    </Button>
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => navigate("/host")}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewEvent;
