import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md">
        <img src="/logo.png" alt="VYPA Logo" className="h-24 w-auto" />
        <div className="flex items-center space-x-6 text-sm">
          <a href="#" className="hover:text-blue-600 font-medium">Signage</a>
          <a href="#" className="hover:text-blue-600 font-medium">Host</a>
          <a href="#" className="hover:text-blue-600 font-medium">Advertise</a>
          <button className="border px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-100">Login</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-blue-700">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto gap-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Grow Your Business</h1>
          <h2 className="text-xl font-medium text-gray-600 mb-6">With Our Solution</h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700">Get Started</button>
            <button className="border border-gray-400 px-5 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50">Learn More</button>
          </div>
        </div>
        <div>
          <img
            src="/homepageImage.png"
            alt="Signage Screen Preview"
            className="w-[300px] md:w-[400px] shadow-xl rounded-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">🔥 VYPΛ FEATURES 🔥</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Why businesses choose VYP&#923; to power their digital signage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  viewport={{ once: true }}
  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
>
  <img src="feature1.png" alt="Remote Management" className="h-20 mx-auto mb-4" />
  <h3 className="text-xl font-semibold mb-2">Remote Management</h3>
  <p className="text-gray-500 text-sm">
    Control all your screens from anywhere. Schedule, update, and publish content in real time.
  </p>
</motion.div>

{/* Feature 2 */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
>
  <img src="feature2.png" alt="Multi-location Sync" className="h-20 mx-auto mb-4" />
  <h3 className="text-xl font-semibold mb-2">Multi-location Sync</h3>
  <p className="text-gray-500 text-sm">
    Instantly sync signage across all your locations, no matter where they are.
  </p>
</motion.div>

{/* Feature 3 */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  viewport={{ once: true }}
  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
>
  <img src="feature3.png" alt="Playlist Scheduling" className="h-20 mx-auto mb-4" />
  <h3 className="text-xl font-semibold mb-2">Playlist Scheduling</h3>
  <p className="text-gray-500 text-sm">
    Automate what plays and when — stay on schedule with zero manual work.
  </p>
</motion.div>

{/* Feature 4 */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  viewport={{ once: true }}
  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
>
  <img src="feature4.png" alt="Drag & Drop Design" className="h-20 mx-auto mb-4" />
  <h3 className="text-xl font-semibold mb-2">Drag & Drop Design</h3>
  <p className="text-gray-500 text-sm">
    Easily create stunning content with our visual editor — no coding needed.
  </p>
</motion.div>

{/* Feature 5 */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}
  viewport={{ once: true }}
  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
>
  <img src="feature5.png" alt="Mobile Access" className="h-20 mx-auto mb-4" />
  <h3 className="text-xl font-semibold mb-2">Mobile Access</h3>
  <p className="text-gray-500 text-sm">
    Monitor and update your content from your phone or tablet, on the go.
  </p>
</motion.div>

{/* Feature 6 */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  viewport={{ once: true }}
  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
>
  <img src="feature6.png" alt="Secure Hosting" className="h-20 mx-auto mb-4" />
  <h3 className="text-xl font-semibold mb-2">Secure Hosting</h3>
  <p className="text-gray-500 text-sm">
    Hosted on secure Canadian cloud infrastructure. Your content stays protected.
  </p>
</motion.div>
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <img src="/feature1.png" alt="Remote Management" className="h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Remote Management</h3>
              <p className="text-gray-500 text-sm">
                Control all your screens from anywhere. Schedule, update, and publish content in real time.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <img src="/feature2.png" alt="Multi-location Sync" className="h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multi-location Sync</h3>
              <p className="text-gray-500 text-sm">
                Easily manage screens across branches or cities with centralized control.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <img src="/feature3.png" alt="Ad Campaign Insights" className="h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ad Campaign Insights</h3>
              <p className="text-gray-500 text-sm">
                Get performance data and proof-of-play for all client campaigns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
// This code defines a simple home page using React and Framer Motion for animations. It includes a navigation bar, a hero section with a call to action, and a features section showcasing the benefits of the service. The design is responsive and uses Tailwind CSS for styling, ensuring a modern and clean layout. Each feature is animated as it comes into view, enhancing the user experience.
// The page is structured to be visually appealing and easy to navigate, with clear calls to action for users to get started or learn more about the service.