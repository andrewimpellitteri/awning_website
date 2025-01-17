'use client';
import Hero from '@/components/sections/hero';
import ServiceCard from '@/components/sections/servicecard';
import { Umbrella, Anchor, Scissors, SprayCan, Droplet, Sun, Building, Box } from 'lucide-react';
import BaseLayout from '@/components/layout/BaseLayout';

export default function Home() {
  const services = [
    {
      title: 'On-Site Cleaning',
      description: 'Professional cleaning services at your location with our specialized equipment.',
      icon: SprayCan,
    },
    {
      title: 'Awning Maintenance',
      description: 'Regular maintenance and care to extend the life of your awnings.',
      icon: Umbrella,
    },
    {
      title: 'Marine Services',
      description: 'Specialized care for boat covers, sails, and other marine fabrics.',
      icon: Anchor,
    },
    {
      title: 'Repair Services',
      description: 'Expert repairs and restoration for damaged outdoor fabrics.',
      icon: Scissors,
    },
    {
      title: 'APCO Products',
      description: 'APCO Products are eco-friendly and designed for outdoor fabrics. Trusted for 32 years and recommended by top fabric manufacturers, we offer the best solutions for any cleaning challenge.',
      icon: Droplet,  // You can replace this with any appropriate icon, or use a default one
    },
    {
      title: 'Storage Services',
      description: 'We offer fully insured, clean, and temperature-controlled storage for awnings and covers during the off-season. Your items are tagged and stored safely until spring.',
      icon: Box // Icon for storage
    },
    {
      title: 'Seasonal Awning Service and On-Site Repairs',
      description: 'Professional seasonal awning put-up and take-down services with on-the-spot repairs like patching and reroping.',
      icon: Sun // Icon for seasonal service
    },
    {
      title: 'New Residential Awnings or Replacement Fabrics',
      description: 'Custom-made new awnings or replacement fabrics, with a lifetime stitching warranty. Choose from a variety of colors and patterns from top manufacturers.',
      icon: Building // Icon for new or replacement awnings
    }    
  ];

  const handleCtaClick = () => {
    // Example navigation logic
    console.log("CTA button clicked!");
  };

  return (
    <BaseLayout>
      <Hero
        title="Professional Outdoor Fabric Care"
        subtitle="Expert cleaning and maintenance services for awnings, boat covers, and more."
        ctaText="Get a Quote"
        onCtaClick={handleCtaClick}
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
