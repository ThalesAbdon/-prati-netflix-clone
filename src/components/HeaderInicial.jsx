import Imgperfil1 from '../assets/img-perfil-1.jpg';
import Imgperfil2 from '../assets/img-perfil-2.jpg';
import Imgperfil3 from '../assets/img-perfil-3.jpg';
import logo from '../assets/Netflix-Logo-500x281.png';
import { FaSistrix } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const HeaderInicial = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch('');
    }

    let imgPerfil = Imgperfil1;
    const dataPerfil = localStorage.getItem('perfil');

    if (dataPerfil === '2') {
        imgPerfil = Imgperfil2;
    } else if (dataPerfil === '3') {
        imgPerfil = Imgperfil3;
    }

    useEffect(() => {
        var nav = document.getElementById('Header');
        window.addEventListener("scroll", function () {
            if (window.scrollY > 10) {
                nav.style.background = "rgb(20, 20, 20)";
            } else {
                nav.style.background = "transparent";
            }
        });
    }, []);

    return (
        <div
            id="Header"
            className="fixed z-[9900] w-full px-8 transition-colors duration-400"
        >
            <div className="box-border flex flex-row items-center gap-4 text-white/80 text-base justify-center pt-1">
                <Link to={'/'}>
                    <img
                        src={logo}
                        id="logo"
                        className="h-16 w-auto cursor-pointer md:h-8"
                        alt="Netflix Logo"
                    />
                </Link>
                <div className="hidden md:flex flex-row gap-4">
                    <select
                        name="nav"
                        onChange={(e) => { navigate(e.target.value) }}
                        className="bg-transparent text-white/80 border-none"
                    >
                        <option>Navegar</option>
                        <option value="/">Início</option>
                        <option value="/">Séries</option>
                        <option value="/">Filmes</option>
                        <option value="/">Top 10</option>
                    </select>
                </div>
                <div id="nav" className="flex flex-row items-center gap-4 justify-start w-1/2 hidden md:flex">
                    <Link to={'/'}>Home</Link>
                    <a href="#">Filmes</a>
                    <a href="#">Séries</a>
                    <a href="#">Top 10</a>
                    <a href="#">Meus favoritos</a>
                </div>
                <div id="div-busca" className="flex flex-row items-center gap-4 justify-end w-1/2">
                    <form onSubmit={handleSubmit} className="flex flex-row gap-4">
                        <button type="submit" className="bg-transparent border-none p-0 m-auto w-8 text-white/80">
                            <FaSistrix className="icon-lupa h-8 w-8 cursor-pointer md:h-4 md:w-4" />
                        </button>
                        <input
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Pesquisar"
                            value={search}
                            className="border-none bg-gray-700 w-40 rounded-md px-4 text-white/80 placeholder-gray-400 focus:outline-none"
                        />
                    </form>
                    <FaRegBell className="icon-sino h-6 w-6 cursor-pointer md:h-4 md:w-4" />
                    <img
                        src={imgPerfil}
                        id="avatar"
                        className="w-9 h-9 rounded-sm cursor-pointer md:w-6 md:h-6"
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeaderInicial;
