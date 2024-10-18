import React from 'react'

function About() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-purple-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl">Learn more about our journey and mission</p>
      </header>

      {/* About Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="bg-white p-8 rounded-lg shadow-md text-gray-700">
            <p className="mb-4">
              We started our journey in 2010 with a vision to make a difference in the technology world. Our goal has always been to deliver high-quality solutions and services that exceed our clients' expectations.
            </p>
            <p className="mb-4">
              Over the years, we have grown from a small team of enthusiasts to a full-fledged company with a diverse group of talented professionals. We specialize in web development, mobile applications, cloud solutions, and digital marketing.
            </p>
            <p>
              Our mission is to empower businesses to reach their full potential by leveraging technology in innovative ways. We believe in continuous learning, improvement, and making a positive impact in the communities we serve.
            </p>
          </div>
        </div>
      </section>

      
    </div>
    </div>
  )
}

export default About
