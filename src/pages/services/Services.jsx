import React from "react";

function Services() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        {/* Header Section */}
        <header className="bg-purple-600 text-white py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">
            Providing top-notch solutions for your business needs
          </p>
        </header>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <p className="text-gray-700">
                  Build responsive and modern websites with cutting-edge
                  technologies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Mobile App Development
                </h3>
                <p className="text-gray-700">
                  Create user-friendly mobile applications for Android and iOS
                  platforms.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
                <p className="text-gray-700">
                  Design appealing and easy-to-navigate interfaces for your
                  users.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
                <p className="text-gray-700">
                  Improve your website's visibility on search engines and
                  attract more traffic.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
                <p className="text-gray-700">
                  Leverage cloud computing to scale your applications
                  efficiently.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Digital Marketing
                </h3>
                <p className="text-gray-700">
                  Promote your brand online and reach a wider audience
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
}

export default Services;
