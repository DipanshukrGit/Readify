import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center py-12 px-6">
      {/* Header Section */}
      <div className="max-w-3xl text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-4">About Readify</h1>
        <p className="text-lg text-base-content/70">
          Readify is your digital doorway to endless stories — a place where readers and
          book lovers can explore, read, and purchase their favorite books in one click.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl grid lg:grid-cols-2 gap-10">
        {/* Left Section - Image */}
        <div>
          <img
            src="https://img.freepik.com/free-vector/flat-design-book-club-concept_23-2149327269.jpg"
            alt="About Readify"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Section - Text */}
        <div className="card bg-base-100 shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-base-content/80 mb-6">
            We aim to make reading more accessible and enjoyable by blending the beauty of
            design with the power of technology. Readify provides both digital and physical
            books — empowering everyone to learn, dream, and grow through stories.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-base-content/80">
            To become the most trusted online destination for book enthusiasts — offering
            a platform that connects authors, readers, and ideas worldwide.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-4xl text-center mt-16">
        <h2 className="text-3xl font-bold mb-4 text-primary">Why Choose Readify?</h2>
        <p className="text-base-content/70">
          From carefully designed interfaces to curated book collections, we’re here to
          make your reading journey seamless. Whether you’re diving into a new genre or
          revisiting a timeless classic, Readify is built for every kind of reader.
        </p>
      </div>

      {/* Footer Note */}
      <p className="mt-10 text-sm text-base-content/60">
        © {new Date().getFullYear()} Readify — Where Stories Never End.
      </p>
    </div>
  );
}
