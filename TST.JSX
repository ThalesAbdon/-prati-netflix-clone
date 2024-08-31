return (
    <div className='box-border flex flex-col items-center mt-24 sm:mt-8'>
        <h1 className="text-white text-5xl font-normal sm:text-center">Quem está assistindo?</h1>
        <div className='box-border flex flex-row justify-center gap-8 w-full flex-wrap mt-8'>
            <div className='cards box-border flex flex-col justify-center text-center text-white text-opacity-60 hover:text-opacity-100 hover:font-semibold cursor-pointer' onClick={() => handlePerfil(3)}>
                <img src={Imgperfil3} className='cardsImg box-border max-w-[200px] max-h-[200px] w-[150px] h-[150px] rounded-lg hover:border-3 hover:border-white cursor-pointer' />
                <p>CAPIVARA</p>
            </div>
            <div className='cards box-border flex flex-col justify-center text-center text-white text-opacity-60 hover:text-opacity-100 hover:font-semibold cursor-pointer' onClick={() => handlePerfil(5)}>
                <img src={Imgperfil5} className='cardsImg box-border max-w-[200px] max-h-[200px] w-[150px] h-[150px] rounded-lg hover:border-3 hover:border-white cursor-pointer' />
                <p>TATIANA</p>
            </div>
            <div className='cards box-border flex flex-col justify-center text-center text-white text-opacity-60 hover:text-opacity-100 hover:font-semibold cursor-pointer' onClick={() => handlePerfil(1)}>
                <img src={Imgperfil1} className='cardsImg box-border max-w-[200px] max-h-[200px] w-[150px] h-[150px] rounded-lg hover:border-3 hover:border-white cursor-pointer' />
                <p>DEBORA</p>
            </div>
            <div className='cards box-border flex flex-col justify-center text-center text-white text-opacity-60 hover:text-opacity-100 hover:font-semibold cursor-pointer' onClick={() => handlePerfil(2)}>
                <img src={Imgperfil2} className='cardsImg box-border max-w-[200px] max-h-[200px] w-[150px] h-[150px] rounded-lg hover:border-3 hover:border-white cursor-pointer' />
                <p>OCTAVIO</p>
            </div>
            <div className='cards box-border flex flex-col justify-center text-center text-white text-opacity-60 hover:text-opacity-100 hover:font-semibold cursor-pointer' onClick={() => handlePerfil(4)}>
                <img src={Imgperfil4} className='cardsImg box-border max-w-[200px] max-h-[200px] w-[150px] h-[150px] rounded-lg hover:border-3 hover:border-white cursor-pointer' />
                <p>SAMUEL</p>
            </div>
        </div>
        <button 
            type='button' 
            className='mt-14 sm:mt-4 sm:mb-8 w-60 bg-[#141414] border-2 border-opacity-40 border-white text-opacity-40 text-white text-lg cursor-pointer hover:text-white hover:border-white'>
            Configurar perfis
        </button>
    </div>
);