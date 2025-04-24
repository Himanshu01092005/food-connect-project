
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

export interface EventProps {
  id: number;
  name: string;
  location: string;
  date: string;
  time: string;
  servings: number;
  hostName: string;
}

const EventCard = ({ id, name, location, date, time, servings, hostName }: EventProps) => {
  return (
    <Card className="h-full overflow-hidden border-2 hover:border-ahaarsetu-orange transition-all">
      <CardHeader className="bg-ahaarsetu-orange/10 pb-2">
        <CardTitle className="text-lg font-bold text-ahaarsetu-brown">{name}</CardTitle>
        <CardDescription className="text-ahaarsetu-brown/70">by {hostName}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4 space-y-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-ahaarsetu-green" />
          <p className="text-sm">{location}</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-ahaarsetu-green" />
          <p className="text-sm">{date} at {time}</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Utensils className="h-4 w-4 text-ahaarsetu-green" />
          <p className="text-sm font-medium">{servings} servings available</p>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-ahaarsetu-green hover:bg-ahaarsetu-green/90 text-white" asChild>
          <Link to={`/event/${id}`}>Request Pickup</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
