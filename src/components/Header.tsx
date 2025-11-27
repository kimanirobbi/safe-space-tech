import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ShieldCheck className="w-8 h-8 text-pink-500" />
          <span className="text-2xl font-bold text-gray-800 dark:text-white">Jukwaa la Amani</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/learn" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400">Learn</Link>
          <Link to="/get-help" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400">Get Help</Link>
          <Link to="/stories" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400">Stories</Link>
          <Link to="/resources" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400">Resources</Link>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;