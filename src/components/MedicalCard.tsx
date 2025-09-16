import React, { useState } from 'react';
import { MapPin, Globe, Stethoscope, ClipboardList, Mail, Phone, Youtube, Facebook, Instagram, ExternalLink, Calendar, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from '@/assets/clinic-hero.jpg';
import clinicLogo from '@/assets/clinic-logo.jpg';

const MedicalCard = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleButtonClick = (title: string) => {
    setClickedButton(title);
    setTimeout(() => setClickedButton(null), 200);
  };

  const primaryLinks = [
    {
      title: "📞 Book Consultation",
      icon: Stethoscope,
      href: "#consultation",
      description: "Schedule with our doctors",
      isPrimary: true
    },
    {
      title: "🏥 Visit Our Website",
      icon: Globe,
      href: "#website",
      description: "Explore all our services"
    },
    {
      title: "📍 Find Our Location",
      icon: MapPin,
      href: "https://maps.google.com",
      description: "Get directions to our clinic"
    },
    {
      title: "📋 Health Packages",
      icon: ClipboardList,
      href: "#packages",
      description: "Comprehensive health plans"
    },
    {
      title: "⭐ Patient Reviews",
      icon: Star,
      href: "#reviews",
      description: "See what our patients say"
    },
    {
      title: "📅 Emergency Services",
      icon: Calendar,
      href: "#emergency",
      description: "24/7 emergency care"
    }
  ];

  const socialLinks = [
    { name: "YouTube", icon: Youtube, href: "#youtube" },
    { name: "Facebook", icon: Facebook, href: "#facebook" },
    { name: "Instagram", icon: Instagram, href: "#instagram" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full floating-animation"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/3 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Linktree-Style Header */}
      <header className="relative z-10 pt-12 pb-6 px-6">
        <div className="max-w-md mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-6 relative">
            <img 
              src={clinicLogo}
              alt="Medex Multispecialty Clinic"
              className="profile-avatar mx-auto object-cover"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center pulse-glow">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Clinic Info */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Medex Multispecialty Clinic
          </h1>
          <p className="text-base text-muted-foreground mb-4 max-w-xs mx-auto">
            🏥 Restoring Health, Transforming Lives
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Open Now • 24/7 Emergency
          </div>
        </div>
      </header>

      {/* Linktree-Style Links */}
      <section className="max-w-md mx-auto px-6 pb-8">
        <div className="space-y-4">
          {primaryLinks.map((link, index) => (
            <div
              key={index}
              className={`linktree-button group ${link.isPrimary ? 'bg-primary text-primary-foreground hover:bg-primary-dark border-primary' : ''} ${
                clickedButton === link.title ? 'scale-95' : ''
              }`}
              onClick={() => handleButtonClick(link.title)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a href={link.href} className="block">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-xl ${link.isPrimary ? 'bg-white/20' : 'bg-primary/10 group-hover:bg-primary-foreground'} transition-all`}>
                      <link.icon className={`w-5 h-5 ${link.isPrimary ? 'text-white' : 'text-primary group-hover:text-primary'}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-base leading-tight">
                        {link.title}
                      </h3>
                      <p className={`text-sm ${link.isPrimary ? 'text-primary-foreground/80' : 'text-muted-foreground'} leading-tight`}>
                        {link.description}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className={`w-4 h-4 ${link.isPrimary ? 'text-white/60' : 'text-muted-foreground group-hover:text-primary'} transition-colors`} />
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

        {/* Social Media Icons */}
        <div className="max-w-md mx-auto px-6 mb-8">
          <div className="flex justify-center space-x-4">
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

        {/* Contact Pills */}
        <div className="max-w-md mx-auto px-6 mb-8">
          <div className="flex flex-col gap-3">
            <a href="mailto:info@medexclinic.com" className="contact-pill group">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-4 h-4 text-primary transition-colors" />
                <span className="text-foreground font-medium text-sm">info@medexclinic.com</span>
              </div>
            </a>
            
            <a href="tel:+1234567890" className="contact-pill group">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-4 h-4 text-primary transition-colors" />
                <span className="text-foreground font-medium text-sm">+1 (234) 567-8900</span>
              </div>
            </a>
          </div>
        </div>

      {/* Footer */}
      <footer className="relative z-10 pb-8">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 border border-border/30">
            <p className="text-xs text-muted-foreground mb-1">
              © 2024 Medex Multispecialty Clinic
            </p>
            <p className="text-xs text-muted-foreground">
              Professional healthcare • Compassionate care
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default MedicalCard;