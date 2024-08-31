import Imgperfil1 from '../assets/img-perfil-1.jpg';
import Imgperfil2 from '../assets/img-perfil-2.jpg';
import Imgperfil3 from '../assets/img-perfil-3.jpg';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Perfis = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        document.body.style.background = `#141414`;
    }, []);

    function handlePerfil(string) {

        localStorage.setItem('perfil', string);
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to='/' />;
    }

    return (
        <div className='box-border flex flex-col items-center mt-24 sm:mt-8'>
            <h1 className="text-white text-5xl font-normal sm:text-center">Quem está assistindo?</h1>
            <div className='box-border flex flex-row justify-center gap-8 w-full flex-wrap mt-8'>
            <div className='cards box-border flex flex-col justify-center text-center text-white text-opacity-60 hover:text-opacity-100 hover:font-semibold cursor-pointer' onClick={() => handlePerfil(1)}>
                    <img src={Imgperfil1} className='cardsImg box-border max-w-[200px] max-h-[200px] w-[150px] h-[150px] rounded-lg hover:border-3 hover:border-white cursor-pointer' />
                    <p>Lucas</p>
                </div>
                <div className='cards box-border flex flex-col justify-center text-center text-white text-opacity-60 hover:text-opacity-100 hover:font-semibold cursor-pointer' onClick={() => handlePerfil(2)}>
                    <img src={Imgperfil2} className='cardsImg box-border max-w-[200px] max-h-[200px] w-[150px] h-[150px] rounded-lg hover:border-3 hover:border-white cursor-pointer' />
                    <p>Diego</p>
                </div>
                <div className='cards box-border flex flex-col justify-center text-center text-white text-opacity-60 hover:text-opacity-100 hover:font-semibold cursor-pointer' onClick={() => handlePerfil(3)}>
                    <img src={Imgperfil3} className='cardsImg box-border max-w-[200px] max-h-[200px] w-[150px] h-[150px] rounded-lg hover:border-3 hover:border-white cursor-pointer' />
                    <p>Fernanda</p>
                </div>
            </div>
            <button 
                type='button' 
                className='mt-14 sm:mt-4 sm:mb-8 w-60 bg-[#141414] border-2 border-opacity-40 border-white text-opacity-40 text-white text-lg cursor-pointer hover:text-white hover:border-white'>
                Configurar perfis
            </button>
        </div>
    );
};

export default Perfis;
