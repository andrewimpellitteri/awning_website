// src/app/quote-form/page.tsx
"use client";
import { useState } from 'react';
import BaseLayout from "@/components/layout/BaseLayout"; // Import BaseLayout
import { Button } from "@/components/ui/button"; // Assuming Button component is styled
import { Input } from "@/components/ui/input"; // Assuming Input component is styled
import { Label } from "@/components/ui/label"; // Assuming Label component is styled
import { Textarea } from "@/components/ui/textarea"; // For longer text inputs


export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    email: '',
    articleTypes: [],
    services: [],
    materialType: '',
    image: null,
    awningLength: '',
    awningWidth: '',
    additionalComments: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: prevData[name].filter((item: string) => item !== value),
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, image: e.target.files ? e.target.files[0] : null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic (e.g., sending the data to an API or email)
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <BaseLayout>
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Get a Quote for Fabric Servicing</h1>
      <p className="mb-6 text-center">Fill out the form below to receive an estimate for your fabric needs.</p>
      <form className="max-w-3xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow-lg">

      {/* Name Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" type="text" placeholder="Enter your first name" required />
        </div>
        <div>
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" type="text" placeholder="Enter your last name" required />
        </div>
      </div>

      {/* Address Section */}
      <div className="grid grid-cols-1 gap-6">
        <div>
          <Label htmlFor="address">Address</Label>
          <Input id="address" type="text" placeholder="Street address" required />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" type="text" placeholder="City" required />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="state">State</Label>
            <Input id="state" type="text" placeholder="State" required />
          </div>
          <div>
            <Label htmlFor="zip">ZIP Code</Label>
            <Input id="zip" type="text" placeholder="ZIP Code" required />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" required />
        </div>
      </div>

      {/* Article Types */}
      <div>
        <Label>Article Types</Label>
        <div className="flex flex-wrap gap-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Awning
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Banner
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Boat Cover
          </label>
          {/* Add more checkboxes here */}
        </div>
      </div>

      {/* Services */}
      <div>
        <Label>Services You Need</Label>
        <div className="flex flex-wrap gap-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Cleaning Service
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Repair Service
          </label>
        </div>
      </div>

      {/* Material Type */}
      <div>
        <Label>Material Type</Label>
        <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="woven-acrylic">Woven Acrylic</option>
          <option value="woven-polyester">Woven Polyester</option>
          <option value="nylon">Nylon</option>
          <option value="vinyl">Vinyl</option>
          <option value="canvas-cotton">Canvas/Cotton</option>
          <option value="mixed-material">Mixed Material</option>
        </select>
      </div>

      {/* Image Upload */}
      <div>
        <Label htmlFor="image-upload">Upload an Image (Optional)</Label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Measurements */}
      <div>
        <Label>Provide Measurements</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="length">Length</Label>
            <Input id="length" type="number" placeholder="Length of item" required />
          </div>
          <div>
            <Label htmlFor="width">Width</Label>
            <Input id="width" type="number" placeholder="Width of item" required />
          </div>
        </div>
      </div>

      {/* Additional Comments */}
      <div>
        <Label htmlFor="comments">Additional Comments</Label>
        <Textarea id="comments" rows={4} placeholder="Any additional details..." />
      </div>

      {/* Consent */}
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" className="mr-2" /> I agree to the privacy policy.
        </label>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button type="submit" className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Submit Quote Request
        </Button>
      </div>
    </form>

    </div>
    </BaseLayout>
    </>
  );
}
