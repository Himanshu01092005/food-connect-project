
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, Utensils, MapPin } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How AhaarSetu Works</h2>
          <p className="text-lg text-ahaarsetu-brown/80 max-w-2xl mx-auto">
            A simple three-step process to connect surplus food with those who need it most
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-ahaarsetu-orange/20 hover:border-ahaarsetu-orange transition-all">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-ahaarsetu-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Utensils className="h-8 w-8 text-ahaarsetu-orange" />
              </div>
              <CardTitle className="text-xl">Food Providers Register</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Wedding halls, caterers, and event organizers register and list their upcoming events with estimated surplus food.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-ahaarsetu-green/20 hover:border-ahaarsetu-green transition-all">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-ahaarsetu-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <HandHeart className="h-8 w-8 text-ahaarsetu-green" />
              </div>
              <CardTitle className="text-xl">Charities Find Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                NGOs, old age homes, and food banks browse available food donations in their area and request pickup.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-ahaarsetu-orange/20 hover:border-ahaarsetu-orange transition-all">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-ahaarsetu-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-ahaarsetu-orange" />
              </div>
              <CardTitle className="text-xl">Food Gets Distributed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Charities pick up the food and distribute it to those in need, reducing waste and fighting hunger.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
