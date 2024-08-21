const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-10 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Connecting talent with opportunities. Find your dream job or the
              perfect candidate with our job portal.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/jobs" className="hover:text-white">
                  Find Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="/post-job" className="hover:text-white">
                  Post a Job
                </a>
              </li>
              <li className="mb-2">
                <a href="/saved-jobs" className="hover:text-white">
                  Saved Jobs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-gray-400 mb-2">Email: contact@jobportal.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          Made with ❤️ by Rizon Rahi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
