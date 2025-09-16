import React from 'react';
import { MapPin, Globe, Stethoscope, ClipboardList, Mail, Phone, Youtube, Facebook, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from '@/assets/clinic-hero.jpg';
import clinicLogo from '@/assets/clinic-logo.jpg';

const MedicalCard = () => {
  const quickLinks = [
    {
      title: "Our Location",
      icon: MapPin,
      href: "https://maps.google.com",
      description: "Find us on Google Maps"
    },
    {
      title: "Visit Our Website",
      icon: Globe,
      href: "#website",
      description: "Explore our services"
    },
    {
      title: "Doctor Consultation",
      icon: Stethoscope,
      href: "#consultation",
      description: "Book an appointment"
    },
    {
      title: "Our Health Packages",
      icon: ClipboardList,
      href: "#packages",
      description: "Comprehensive health plans"
    }
  ];

  const socialLinks = [
    { name: "YouTube", icon: Youtube, href: "#youtube", color: "#FF0000" },
    { name: "Facebook", icon: Facebook, href: "#facebook", color: "#1877F2" },
    { name: "Instagram", icon: Instagram, href: "#instagram", color: "#E4405F" }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Modern Medex Multispecialty Clinic exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary-dark/90"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Clinic Logo */}
          <div className="mb-6">
            <img 
              src={clinicLogo}
              alt="Medex Multispecialty Clinic Logo"
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover mx-auto"
            />
          </div>
          
          {/* Clinic Name & Tagline */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
            Medex Multispecialty Clinic
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl">
            Restoring Health, Transforming Lives
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Quick Links Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className="medical-card p-6 hover:scale-[1.02] cursor-pointer group">
                <a href={link.href} className="block">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <link.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-icon group"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Get In Touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Card className="medical-card p-4 hover:scale-105 cursor-pointer group">
              <a href="mailto:info@medexclinic.com" className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary group-hover:text-primary-dark transition-colors" />
                <span className="text-foreground font-medium">info@medexclinic.com</span>
              </a>
            </Card>
            
            <Card className="medical-card p-4 hover:scale-105 cursor-pointer group">
              <a href="tel:+1234567890" className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary group-hover:text-primary-dark transition-colors" />
                <span className="text-foreground font-medium">+1 (234) 567-8900</span>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Medex Multispecialty Clinic. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Professional healthcare services with compassionate care.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default MedicalCard;