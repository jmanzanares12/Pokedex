import React from "react";
import { Link, useLocation } from "react-router-dom";
import pokeball from "../assets/pokeball.png";
import SearchButton from "../shared/SearchButton";

const NavigationBar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between h-16 items-center px-6">
        
        <Link to='/' className="flex items-center gap-2 transition-transform hover:scale-110">
          <img src={pokeball} alt="Poke Logo" className="w-9 h-9" />
          <span className="font-bold text-xl tracking-tight text-gray-800 hidden sm:block">
            Poké<span className="text-red-500">dex</span>
          </span>
        </Link>

        <div className="flex gap-8 items-center">
          <Link 
            to='/' 
            className={`text-sm font-medium transition-colors ${
              pathname === '/' ? 'text-red-500' : 'text-gray-600 hover:text-black'
            }`}
          >
            Pokedex
          </Link>
          <Link 
            to='/favorite' 
            className={`text-sm font-medium transition-colors ${
              pathname === '/favorite' ? 'text-red-500' : 'text-gray-600 hover:text-black'
            }`}
          >
            Favorites
          </Link>
          
          <div className="h-6 w-[1px] bg-gray-200 mx-2" />
          
          <SearchButton />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;