import React from 'react'

function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-purple-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl mb-6">Building modern web applications with React and Tailwind CSS</p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
     
    </div>
    </div>
  )
}

export default Home
