import React from 'react';
import { Instagram, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Playfair_Display'] leading-tight">Elevate Your Style<br />with Casuals & Ethnics</h1>
          <p className="text-xl md:text-2xl mb-10 font-light">Experience the future of fashion with by_irfa</p>
          <div className="space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200 text-lg py-6 px-8">Explore in VR</Button>
            <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors duration-300 text-lg py-6 px-8">Browse Collection</Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-50">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Fashion Hero" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-10 w-10" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 font-['Playfair_Display'] text-center">About by_irfa</h2>
          <p className="text-xl mb-8 leading-relaxed text-center">by_irfa is a forward-thinking clothing brand specializing in casual and ethnic wear, defining the future of online shopping with cutting-edge technology. We blend timeless elegance with modern innovation to bring you a unique fashion experience.</p>
          <p className="text-xl font-bold text-center">Follow us on Instagram: <span className="font-['Roboto'] text-2xl">@i_r_f_a</span></p>
        </div>
      </section>

      {/* VR Dress Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 font-['Playfair_Display'] text-center">VR Dress Showcase</h2>
          <p className="text-xl mb-12 text-center max-w-3xl mx-auto">Step into our virtual dressing room and experience our collection like never before. Mix and match items in various settings to find your perfect look.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Casual Elegance", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
              { title: "Ethnic Grace", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
              { title: "Modern Chic", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-xl rounded-lg transition-transform duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white text-black hover:bg-gray-200">Experience in VR</Button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-['Playfair_Display']">{item.title}</h3>
                <p className="text-gray-600">Discover the perfect fit in our virtual dressing room</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit Check with VR */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 font-['Playfair_Display']">Fit Check with VR</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Upload your measurements and see how our garments fit your virtual avatar. Experience a new level of confidence in your online shopping.</p>
          <Button className="bg-white text-black hover:bg-gray-200 text-lg py-6 px-12">Try Virtual Fitting</Button>
        </div>
      </section>

      {/* Ordering Information */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 font-['Playfair_Display']">How to Order</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Ordering your favorite pieces from by_irfa is just a click away. Choose your preferred method below:</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Button className="bg-black text-white hover:bg-gray-800 text-lg py-6 px-12 flex items-center justify-center">
              <Instagram className="mr-3 h-6 w-6" /> Order via Instagram DM
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 text-lg py-6 px-12 flex items-center justify-center" onClick={() => window.open('https://wa.me/971562534524', '_blank')}>
              <MessageCircle className="mr-3 h-6 w-6" /> Order via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 font-['Playfair_Display']">Shipping</h2>
          <p className="text-xl max-w-3xl mx-auto">We deliver the by_irfa experience right to your doorstep. Enjoy our premium shipping service across UAE and India.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 font-['Playfair_Display']">by_irfa</h3>
              <p className="text-lg">Redefining fashion, one virtual experience at a time.</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-lg mb-4">Connect with us</p>
              <div className="flex space-x-6">
                <Instagram className="h-8 w-8 cursor-pointer hover:text-gray-300 transition-colors duration-300" />
                <MessageCircle className="h-8 w-8 cursor-pointer hover:text-gray-300 transition-colors duration-300" />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>&copy; 2024 by_irfa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
