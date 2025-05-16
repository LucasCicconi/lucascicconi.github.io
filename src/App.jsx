import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Lucas Cicconi</h1>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">Computer Engineering graduate with extensive experience in web and mobile development. Skilled in leading projects from planning through delivery, with a focus on creating efficient and user-friendly solutions.</p>
            <div className="flex gap-4">
              <a href="https://github.com/LucasCicconi" className="text-gray-600 hover:text-gray-800">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/lucascicconiferreira" className="text-gray-600 hover:text-gray-800">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Social Media Automation Platform"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Social Media Automation Platform</h3>
              <p className="text-gray-600 mb-4">A platform for automated social media content creation and publishing, featuring integrations with Meta APIs, Twitter, WhatsApp, and OpenAI.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Angular</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <img 
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                alt="E-commerce Platform"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">Full-stack e-commerce solution with customer-facing interface and admin panel, focusing on performance and scalability.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">MongoDB</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <img 
                src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg"
                alt="Internal System Overhaul"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Internal System Overhaul</h3>
              <p className="text-gray-600 mb-4">Modernized internal system with responsive web platform and mobile app for tracking employee and equipment movement.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">CSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>JavaScript / TypeScript</li>
                  <li>C / C++ / C#</li>
                  <li>Dart</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Frameworks</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>React / Next.js</li>
                  <li>Angular</li>
                  <li>Flutter</li>
                  <li>HTML / CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Other Technologies</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>SQL / MongoDB</li>
                  <li>Firebase</li>
                  <li>AWS</li>
                  <li>Terraform</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-gray-600">
          <p>Contact: lucascicconifer@gmail.com | Vinhedo, SP</p>
        </footer>
      </main>
    </div>
  );
}

export default App;