import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white flex justify-between px-6 py-4 shadow-md z-50">
    <div className="text-lg font-bold">Kumar Aditya</div>
    <div className="space-x-6">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/projects" className="hover:text-blue-400">Projects</Link>
      <Link to="/contact" className="hover:text-blue-400">Contact</Link>
    </div>
  </nav>
);

export default Navbar;