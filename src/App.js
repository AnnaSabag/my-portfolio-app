import { useState } from 'react';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ConfettiCert() {
  const [confettiFired, setConfettiFired] = useState(false);

  const handleConfetti = () => {
    if (!confettiFired) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setConfettiFired(true);
    }
  };

  return (
      <div onMouseEnter={handleConfetti} className="cursor-pointer text-center">
        <div className="inline-flex items-start justify-center flex-wrap gap-2 max-w-[90vw]">
          <img
            src="/images/checkmark.png"
            alt="Checkmark Icon"
            className="w-8 h-8 mt-1"
          />
          <h3 className="text-3xl sm:text-4xl font-bold leading-snug text-green-600 hover:underline text-center">
            <a
              href="https://www.credly.com/badges/979ab522-9c54-4b8e-a5d3-55565c0833f8/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              SAP Certified Associate – Data Analyst – SAP Analytics Cloud
              
            </a>
          </h3>
        </div>
        <p className="font-sora text-gray-500 text-lg mt-4 text-center">
          Issued by SAP | May 2025
        </p>
      </div>

  );
}

function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div style={{ backgroundColor: "#ccfbf1" }}>
      {/* Home Widget */}
      <a
        href="#home"
        title="Back to Top"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-400 to-teal-500 text-white p-4 rounded-full shadow-lg transition duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-400/60 hover:bg-gradient-to-br"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 4l9 5.75M4.5 10.5v9a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-6h6v6a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-9" />
        </svg>
      </a>

      {/* Resume Modal */}
        {showResume && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-2">
            <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-full sm:max-w-5xl shadow-lg relative">
              <object
                data="/Resume-Anna-Sabag.pdf"
                type="application/pdf"
                className="w-full h-[80vh] rounded-md"
              >
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-600">
                  <p className="mb-2">
                    This browser does not support displaying PDFs.<br />
                    But hey, you can still download the CV  <span className="text-xl">⬇️</span>
                  </p>
                </div>
              </object>

              <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                <a
                  href="/Resume-Anna-Sabag.pdf"
                  download
                  className="bg-emerald-500 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-emerald-600 transition"
                >
                  Download PDF
                </a>
                <button
                  onClick={() => setShowResume(false)}
                  className="text-lg text-emerald-600 font-semibold hover:underline transition text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}




      {/* Home Section */}
      <section id="home" className="bg-teal-100 px-6 pt-4 pb-16 md:px-24" style={{ marginTop: "60px" }}>
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/anna-avatar.png"
            alt="Anna Sabag Avatar"
            className="w-48 h-48 rounded-full object-cover border-1 border-white shadow-md mb-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-teal-300"
          />
          <h2 className="font-sora font-bold text-3xl text-gray-600">Hi! I am Anna Sabag</h2>
          <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-lime-500 via-cyan-500 to-blue-500 text-transparent bg-clip-text mt-2 transition-transform duration-300 ease-in-out hover:scale-110">
            BI Developer
          </h1>
          <p className="font-sora text-gray-600 text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed">
            Passionate BI Developer skilled in creating insightful dashboards using Power BI and Python
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 text-3xl text-gray-700 mt-6">
            <a
              href="https://github.com/AnnaSabag?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anna-sabag/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:annasabeg@gmail.com"
              className="hover:text-red-600"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Resume Button */}
          <br />
          <button
            onClick={() => setShowResume(true)}
            className="button"
          >
            <span className="button_lg bg-gray-400 text-gray-700 border border-gray-600">
              <span className="button_sl bg-green-500"></span>
              <span className="button_text font-sora font-bold inline-flex items-center text-sm">
                My Resume
                <svg
                  className="ml-2 w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </section>
      
      {/* About Me Section */}
      <section id="about" className="mt-16 px-6 md:px-24">
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-7xl mx-auto">
          {/* Image */}
          <div className="bg-white rounded-xl shadow-lg flex-shrink-0">
            <img
              src="/images/anna-avatar-work-3.png"
              alt="Anna working on laptop"
              className="w-72 h-72 rounded-xl object-cover transform transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/40"
            />
          </div>

          {/* Text */}
          <div className="border border-gray-300 rounded-xl p-8 shadow-sm w-full flex flex-col gap-3" style={{ backgroundColor: "#198562" }}>
            <h2 className="text-4xl font-sora font-bold mb-4 text-white">About Me</h2>
              <p className="font-ibm text-white text-lg leading-relaxed">
                👩‍💻 I'm currently an SAP Consultant with a background in BI development.
              </p>
              <p className="font-ibm text-white text-lg leading-relaxed">
                📊 I enjoy working with data to improve processes and support decision-making.
              </p>
              <p className="font-ibm text-white text-lg leading-relaxed">
                 🛠 I create dashboards in Power BI and automate tasks using Python.
              </p>
              <p className="font-ibm text-white text-lg leading-relaxed">
                🎓 I'm studying for a B.Sc. in Computer Science to grow my technical skills.
              </p>
              <p className="font-ibm text-white text-lg leading-relaxed">
                💡 I'm driven by curiosity and always looking to turn data into clear insights.
              </p>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-16 px-6 md:px-24 text-center">
        <h2 className="font-sora text-5xl font-extrabold mb-16">My Projects</h2>

        <div className="flex flex-col gap-20">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-[1.015]">
          <a
            href="https://github.com/AnnaSabag/expenses-tracker"
            target="_blank"
            rel="noopener noreferrer"
            title="Take a look!"
            className="md:w-1/2"
          >
            <img
              src="/images/expenses-dashboard.png"
              alt="Expenses Tracker"
              className="object-cover w-full h-full"
            />
          </a>
          <div className="p-8 text-left flex flex-col justify-center md:w-1/2">
            <h3 className="font-sora text-3xl font-bold mb-4">Expenses Tracker Dashboard</h3>
            <p className="font-sora text-gray-600 mb-6">
              The Expense Tracker Dashboard is a dynamic Power BI report built to visualize and monitor personal or household expenses. <br />
              This dashboard helps users understand their spending habits across different categories, time periods, and payment methods. <br />
              It supports better financial decision-making by offering clear insights into where the money goes.
            </p>
            <a
              href="https://github.com/AnnaSabag/expenses-tracker"
              target="_blank"
              rel="noopener noreferrer"
              title="Take a look!"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-teal-400 transition w-max"
            >
              <FaGithub className="text-lg" />
              <span>View my Github →</span>
            </a>
          </div>
        </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-[1.015]">
            <a
              href="https://github.com/AnnaSabag/alerts-history"
              target="_blank"
              rel="noopener noreferrer"
              title="Take a look!"
              className="md:w-1/2"
            >
              <img
                src="/images/alerts-dashboard.png"
                alt="Alerts History Dashboard"
                className="object-cover w-full h-full"
              />
            </a>
            <div className="p-8 text-left flex flex-col justify-center md:w-1/2">
              <h3 className="font-sora text-3xl font-bold mb-4">Alerts History Dashboard</h3>
              <p className="font-sora text-gray-600 mb-6">
                The Alerts History Dashboard is a Power BI report that visualizes missile and terrorist infiltration alerts in Israel during October 2023. <br />
                Using a custom Python scraper, I extracted real-time data from the official Home Front Command Alerts History website and structured it into an Excel file.
              </p>
              <a
                href="https://github.com/AnnaSabag/alerts-history"
                target="_blank"
                rel="noopener noreferrer"
                title="Take a look!"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-teal-400 transition w-max"
              >
                <FaGithub className="text-lg" />
                <span>View my Github →</span>
              </a>
            </div>
          </div>


          {/* Project 3 */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-[1.015]">
            <a
              href="https://github.com/AnnaSabag/flight-prices-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              title="Take a look!"
              className="md:w-1/2"
            >
              <img
                src="/images/flights-dashboard.png"
                alt="Flight Prices Tracker"
                className="object-cover w-full h-full"
              />
            </a>
            <div className="p-8 text-left flex flex-col justify-center md:w-1/2">
              <h3 className="font-sora text-3xl font-bold mb-4">Flight Prices Tracker Dashboard</h3>
              <p className="font-sora text-gray-600 mb-6">
                The Flight Prices Dashboard is a comprehensive Power BI report designed to help users analyze and visualize trends in flight ticket pricing across multiple destinations. <br />
                The data was collected in real-time using a Python web scraper that connects to the Skyscanner API, making this a great example of combining automated data collection with BI analytics.
              </p>
              <a
                href="https://github.com/AnnaSabag/flight-prices-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                title="Take a look!"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-teal-400 transition w-max"
              >
                <FaGithub className="text-lg" />
                <span>View my Github →</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section id="certifications" className="mt-20 px-6 md:px-24">
        <h2 className="font-sora text-5xl font-extrabold text-center mb-12">Certifications</h2>

        <div className="flex justify-center">
          <div className="text-center space-y-3">
            <ConfettiCert />
          </div>
        </div>
      </section>
      

        {/* Contact Section */}
          <section id="contact" className="mt-24 mb-32 px-6 md:px-24">
          <h2 className="font-sora text-5xl font-extrabold text-center mb-4">Contact</h2>
          <p className="font-sora text-center text-gray-600 mb-12">
            If you want to contact me, please use the form below.
          </p>
          <form
            action="https://formspree.io/f/yourFormID" // replace with your actual form ID
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;

              // Use Formspree directly via POST
              fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                  Accept: 'application/json',
                },
              })
                .then(() => {
                  Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thanks for reaching out — I’ll get back to you soon.',
                    icon: 'success',
                    confirmButtonColor: '#10b981',
                  });
                  form.reset();
                })
                .catch(() => {
                  Swal.fire({
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again later.',
                    icon: 'error',
                    confirmButtonColor: '#ef4444',
                  });
                });
            }}
            className="max-w-4xl mx-auto space-y-6"
          >

            {/* Name & Email */}
            <div className="font-sora grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              required
              className="font-sora w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>

            {/* Submit Button */}
            <div className="text-left mb-10">
              <button
                type="submit"
                className="font-sora bg-white text-black border border-gray-300 rounded-lg px-6 py-2 font-medium hover:bg-green-500 transition flex items-center gap-2"
              >
                Submit
                <span className="text-xl">➜</span>
              </button>
            </div>
          </form>

          {/* WhatsApp QR Code */}
          <div className="mt-10 flex flex-col items-center">
            <p className="font-sora text-gray-600 mb-4">Or contact me directly via WhatsApp:</p>
            <img
              src="/images/whatsapp-qr.png"
              alt="WhatsApp QR Code"
              className="w-40 h-40 shadow-md hover:scale-105 transition-transform"
            />
          </div>
        </section>

        <footer className="font-sora bg-green-600 text-center text-sm text-white py-6 mt-16 border-t border-gray-300">
          © 2025 Anna Sabag's Portfolio.
        </footer>
    </div>
  );
}

export default App;
