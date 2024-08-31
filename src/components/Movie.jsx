import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
    BsGraphUp,
    BsWallet2,
    BsClockFill,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs';
import { IoStar } from "react-icons/io5";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_BANNER;

const Container = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    width: 80%;
    padding: 4rem 0;
`;

const MovieContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    
    @media only screen and (max-width: 950px) {
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }
`;

const H2 = styled.h2`
    width: 100%;
    color: white;
    @media only screen and (max-width: 950px) {
        text-align: center;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: white;
    margin-top: 1rem;

    th, td {
        border: 1px solid #e0e0e0;
        padding: 0.8rem;
        text-align: left;
    }

    th {
        background-color: #333;
    }

    tr:nth-child(even) {
        background-color: #444;
    }

    td {
        background-color: #222;
    }
`;

const Img = styled.img`
    @media only screen and (max-width: 700px) {
       width: 25rem;
       height: auto;
    }
`;

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    };

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`;
        getMovie(movieUrl);
    }, [id]);

    return (
        <Container>
            {movie &&
                <>
                    <H2>{movie.title}</H2>
                    <MovieContainer>
                        <div>
                            <Img src={imageUrl + movie.poster_path} alt={movie.title} />
                        </div>
                        <div>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Info</th>
                                        <th>Detalhes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><IoStar /> Nota</td>
                                        <td>{movie.vote_average}</td>
                                    </tr>
                                    <tr>
                                        <td><BsWallet2 /> Orçamento</td>
                                        <td>{(movie.budget).toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
                                    </tr>
                                    <tr>
                                        <td><BsGraphUp /> Receita:</td>
                                        <td>{(movie.revenue).toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
                                    </tr>
                                    <tr>
                                        <td><BsClockFill /> Duração</td>
                                        <td>{movie.runtime} minutos</td>
                                    </tr>
                                    <tr>
                                        <td><BsFillFileEarmarkTextFill /> Descrição</td>
                                        <td>{movie.overview}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </MovieContainer>
                </>
            }
        </Container>
    );
};

export default Movie;
