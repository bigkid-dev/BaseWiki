const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-6 pr-20">
            <h2 className="text-lg font-bold mb-2">About </h2>
            <p className="text-gray-400">
              BaseWiki is an innovative AI-powered solution designed to
              revolutionize the way users interact with the Base ecosystem
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/chats" className="text-gray-400 hover:text-white">
                  chats
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-bold mb-2">Base</h2>
            <p>
              <a
                href="https://docs.base.org/"
                className="text-gray-400 hover:text-white"
              >
                developer portal
              </a>
            </p>
            <p>
              <a
                className="text-gray-400 hover:text-white"
                href="https://base-sdk.readthedocs.io/"
              >
                Documention
              </a>
            </p>
            <p>
              <a
                className="text-gray-400 hover:text-white"
                href="https://base.org/"
              >
                website
              </a>
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} BASEWIKI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
