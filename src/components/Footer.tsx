
const Footer = () => {
  return (
    <footer className="bg-ahaarsetu-brown text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AhaarSetu</h3>
            <p className="mb-4">Connecting surplus food with those in need.</p>
            <div className="flex items-center">
              <img src="/lovable-uploads/aa55d1cc-6f0b-4feb-a01e-09ec4154d9ff.png" alt="AhaarSetu Logo" className="h-10 mr-2" />
              <span className="text-white text-xl font-bold">AhaarSetu</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/80 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-white/80 hover:text-white transition">About Us</a></li>
              <li><a href="/host" className="text-white/80 hover:text-white transition">For Food Donors</a></li>
              <li><a href="/charity" className="text-white/80 hover:text-white transition">For Charities</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="mb-2">Email: contact@ahaarsetu.org</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} AhaarSetu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
