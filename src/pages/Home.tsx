import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section 
        className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden h-[60vh]"
        style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/6c56332c-83ae-4328-9060-2e87223d055d/hero-banner-uc1pv32-1764260067624.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Safe Space Online</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">A community dedicated to preventing GBV and online bullying through education and support.</p>
            <Link to="/learn">
              <button className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition duration-300">Start Learning</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Learn</h3>
            <p>Understand digital rights, online safety, and how to identify different forms of GBV.</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Get Help</h3>
            <p>Access resources and connect with organizations that can provide immediate support.</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Share Stories</h3>
            <p>Read experiences from the community and share your own story anonymously.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;