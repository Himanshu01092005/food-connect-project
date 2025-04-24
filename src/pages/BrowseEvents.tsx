
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import EventCard from "@/components/EventCard";
import { events } from "@/data/mockData";
import { useState } from "react";

const BrowseEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  
  // Filter events based on search query and date filter
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.location.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDate = dateFilter ? event.date === dateFilter : true;
    
    return matchesSearch && matchesDate;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Browse Available Food Donations</h1>
          
          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <Input 
                  id="search" 
                  placeholder="Search by location or event name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dateFilter">Date</Label>
                <Input 
                  id="dateFilter" 
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>
              
              <div className="flex items-end">
                <Button 
                  className="w-full bg-ahaarsetu-green hover:bg-ahaarsetu-green/90 text-white"
                  onClick={() => {
                    setSearchQuery("");
                    setDateFilter("");
                  }}
                >
                  <Search className="mr-2 h-4 w-4" /> Reset Filters
                </Button>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="mb-4">
            <p className="text-ahaarsetu-brown">
              Showing {filteredEvents.length} of {events.length} available donations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
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
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <p className="text-lg text-ahaarsetu-brown/70">No events match your search criteria.</p>
                <Button 
                  className="mt-4 bg-ahaarsetu-green hover:bg-ahaarsetu-green/90 text-white"
                  onClick={() => {
                    setSearchQuery("");
                    setDateFilter("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrowseEvents;
