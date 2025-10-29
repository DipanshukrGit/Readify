import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center py-12 px-6">
      {/* Header Section */}
      <div className="max-w-3xl text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-lg text-base-content/70">
          Have a question, suggestion, or feedback about Readify?  
          We’d love to hear from you! Fill out the form below or reach us through the following channels.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Contact Form */}
        <div className="card bg-base-100 shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="label">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">Message</label>
              <textarea
                className="textarea textarea-bordered w-full h-32"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="card bg-base-100 shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <MapPin className="text-primary" />
              <span>Readify HQ, Sector 21, Gurugram, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-primary" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-primary" />
              <span>support@readify.in</span>
            </li>
          </ul>

          {/* Map Section */}
          <div className="mt-8">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d77.0369!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e92a1a5e25%3A0x2e03f2b302ce72!2sGurugram!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border border-base-300"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-10 text-sm text-base-content/60">
        © {new Date().getFullYear()} Readify — Your Digital Doorway to Endless Stories.
      </p>
    </div>
  );
}
