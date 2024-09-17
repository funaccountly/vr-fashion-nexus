import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-4 font-['Playfair_Display']">Elevate Your Style with Casuals & Ethnics</h1>
          <p className="text-2xl mb-8">from by_irfa</p>
          <div className="space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200">Explore in VR</Button>
            <Button className="bg-white text-black hover:bg-gray-200">Browse Collection</Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-50">
          {/* Placeholder for VR-enabled slideshow */}
          <img src="/placeholder.svg" alt="VR Slideshow" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 font-['Playfair_Display']">About by_irfa</h2>
          <p className="text-xl mb-4">by_irfa is a forward-thinking clothing brand specializing in casual and ethnic wear, defining the future of online shopping with cutting-edge technology.</p>
          <p className="text-xl font-bold">Follow us on Instagram: <span className="font-['Roboto']">@i_r_f_a</span></p>
        </div>
      </section>

      {/* VR Dress Showcase */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 font-['Playfair_Display']">VR Dress Showcase</h2>
          <p className="text-xl mb-8">Experience our collection in a virtual dressing room. Mix and match items in various settings.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for VR product showcases */}
            <div className="bg-white p-4 shadow-lg">
              <img src="/placeholder.svg" alt="Product 1" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">Casual Shirt</h3>
              <p>Experience this shirt in VR</p>
            </div>
            <div className="bg-white p-4 shadow-lg">
              <img src="/placeholder.svg" alt="Product 2" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">Ethnic Dress</h3>
              <p>Try on this dress virtually</p>
            </div>
            <div className="bg-white p-4 shadow-lg">
              <img src="/placeholder.svg" alt="Product 3" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">Modern Jacket</h3>
              <p>See how it looks in different settings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fit Check with VR */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 font-['Playfair_Display']">Fit Check with VR</h2>
          <p className="text-xl mb-8">Upload your measurements and see how our garments fit your virtual avatar.</p>
          <Button className="bg-black text-white hover:bg-gray-800">Try Virtual Fitting</Button>
        </div>
      </section>

      {/* Ordering Information */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 font-['Playfair_Display']">How to Order</h2>
          <div className="flex space-x-4">
            <Button className="bg-black text-white hover:bg-gray-800">
              <Instagram className="mr-2 h-4 w-4" /> Order via Instagram DM
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800" onClick={() => window.open('https://wa.me/971562534524', '_blank')}>
              <MessageCircle className="mr-2 h-4 w-4" /> Order via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 font-['Playfair_Display']">Shipping</h2>
          <p className="text-xl">We ship all over UAE and India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">by_irfa</h3>
              <p>Contact: info@byirfa.com</p>
            </div>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6" />
              <MessageCircle className="h-6 w-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
