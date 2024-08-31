import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

import op from "../assets/op.png";
import destaque from "../assets/op-banner.png";
import Carrossel from './Carrossel';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [actionMovies, setActionMovies] = useState([]);
    const [adventureMovies, setAdventuryMovies] = useState([]);
    const [animationMovies, setAnimationMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const getMovies = async (topurl, nowurl, popurl, upurl, actionurl, adventureurl, comedyurl, animationurl, endurl) => {
        const topres = await fetch(topurl);
        const topdata = await topres.json();
        setTopMovies(topdata.results);

        const nowres = await fetch(nowurl);
        const nowdata = await nowres.json();
        setNowMovies(nowdata.results);

        const popres = await fetch(popurl);
        const popdata = await popres.json();
        setPopularMovies(popdata.results);

        const upres = await fetch(upurl);
        const updata = await upres.json();
        setUpcomingMovies(updata.results);

        const actionres = await fetch(actionurl);
        const actiondata = await actionres.json();
        setActionMovies(actiondata.results);

        const adventureres = await fetch(adventureurl);
        const adventuredata = await adventureres.json();
        setAdventuryMovies(adventuredata.results);

        const comedyres = await fetch(comedyurl);
        const comedydata = await comedyres.json();
        setComedyMovies(comedydata.results);

        const animationres = await fetch(animationurl);
        const animationdata = await animationres.json();
        setAnimationMovies(animationdata.results);

        const animationress = await fetch(endurl);
        const animationdataa = await animationress.json();
        setAnimationMovies(animationdataa.results);
    };

    useEffect(() => {
        document.body.style.background = `#141414`;

        const topRatedurl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
        const nowPlayingurl = `${moviesURL}now_playing?${apiKey}&language=pt-BR`;
        const popularurl = `${moviesURL}popular?${apiKey}&language=pt-BR`;
        const upComingurl = `${moviesURL}upcoming?${apiKey}&language=pt-BR`;
        const actionurl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=28&${apiKey}`;
        const adventureurl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=12&${apiKey}`;
        const comedyurl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=35&${apiKey}`;
        const animationurl = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=16&${apiKey}`;
        const endurl = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=16&${apiKey}`;
        getMovies(topRatedurl, nowPlayingurl, popularurl, upComingurl, actionurl, adventureurl, animationurl, endurl, comedyurl);
    }, []);

    return (
        <div id="home" className="w-full mx-auto box-border">
            <div id="destaque" 
                className="relative max-w-full max-h-full pt-40 pb-40 bg-cover bg-no-repeat pl-12 sm:pt-40 sm:pl-8 sm:pb-40 xs:pt-12 xs:pl-4 xs:pb-12" 
                style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 5000%), url(${destaque})` }}>
              <img src={op} alt="Destaque" className="h-auto sm:w-80 xs:w-60" style={{ width: '26rem' }} />

                <h2 className="text-white w-1/2 text-xl font-semibold sm:text-base xs:text-sm">
                    One Piece conta as aventuras de Monkey D. Luffy, um jovem cujo corpo ganhou as propriedades de borracha após ter comido um fruto do diabo acidentalmente.
                </h2>
                <div className="box-border flex flex-row w-1/3 gap-3">
                    <button className="box-border flex flex-row gap-2 items-center justify-center text-black bg-white rounded w-1/3 sm:text-sm sm:w-80 xs:text-xs">
                        <FaPlay className="w-5 h-5 sm:w-4 sm:h-4" /><strong>Assistir</strong>
                    </button>
                    <button className="box-border flex flex-row gap-2 items-center justify-center text-white bg-gray-600 bg-opacity-50 rounded w-2/3 sm:text-sm sm:w-160 xs:text-xs xs:w-120">
                        <IoIosInformationCircleOutline className="w-8 h-8 sm:w-6 sm:h-6" /><strong>Mais Informações</strong>
                    </button>
                </div>
            </div>
            <h3 className="text-white text-2xl font-semibold ml-24 xs:text-center xs:ml-0">Top Avaliados</h3>
            <Carrossel movies={topMovies} />
            <h3 className="text-white text-2xl font-semibold ml-24 xs:text-center xs:ml-0">Em Cartaz</h3>
            <Carrossel movies={nowMovies} />
            <h3 className="text-white text-2xl font-semibold ml-24 xs:text-center xs:ml-0">Mais adorados</h3>
            <Carrossel movies={popularMovies} />
            <h3 className="text-white text-2xl font-semibold ml-24 xs:text-center xs:ml-0">Lançamentos</h3>
            <Carrossel movies={upcomingMovies} />
            <h3 className="text-white text-2xl font-semibold ml-24 xs:text-center xs:ml-0">Filmes de Ação</h3>
            <Carrossel movies={actionMovies} />
            <h3 className="text-white text-2xl font-semibold ml-24 xs:text-center xs:ml-0">Filmes de Animação</h3>
            <Carrossel movies={animationMovies} />
            <h3 className="text-white text-2xl font-semibold ml-24 xs:text-center xs:ml-0">Filmes de Aventura</h3>
            <Carrossel movies={adventureMovies} />
            <h3 className="text-white text-2xl font-semibold ml-24 xs:text-center xs:ml-0">Filmes de Comédia</h3>
            <Carrossel movies={comedyMovies} />
        </div>
    );
}

export default Home;
