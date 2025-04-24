
const Stats = () => {
  return (
    <section className="bg-ahaarsetu-brown text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-ahaarsetu-orange mb-2">150+</p>
            <p className="text-lg">Food Providers</p>
          </div>
          
          <div>
            <p className="text-4xl md:text-5xl font-bold text-ahaarsetu-orange mb-2">75+</p>
            <p className="text-lg">Charities</p>
          </div>
          
          <div>
            <p className="text-4xl md:text-5xl font-bold text-ahaarsetu-orange mb-2">5,000+</p>
            <p className="text-lg">Meals Shared</p>
          </div>
          
          <div>
            <p className="text-4xl md:text-5xl font-bold text-ahaarsetu-orange mb-2">20+</p>
            <p className="text-lg">Cities Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
