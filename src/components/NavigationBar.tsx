import React from "react";
import { Link } from "react-router-dom";
import pokeball from "../assets/pokeball.png";
import SearchButton from "../shared/SearchButton";

const NavigationBar: React.FC = () => (
    <nav className="mx-auto bg-cyan-700 flex justify-between h-12 items-center shadow-lg px-4 py-2 gap-4">
        <div className="mx-auto flex justify-between items-center w-9/12">
            <Link to='/'><img src={pokeball} alt="Poke Logo" className="w-8 h-8" /></Link>
        </div>
        <div className="flex gap-5 items-center">
            <Link to='/' className="text-black hover:text-white">Pokedex</Link>
            <Link to='/favorite' className="text-black hover:text-white">Favorites</Link>
            <SearchButton />
        </div>
    </nav>
)

export default NavigationBar;