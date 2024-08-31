const Footer = () => {
    return (
        <footer className="box-border w-full h-full mt-20 p-12 flex flex-col bg-black text-white">
            <p className="mb-4">Dúvidas? Ligue <a href="#" className="text-white opacity-80 underline">0800 591 2876</a></p>
            <div className="flex flex-row flex-wrap">
                <div className="flex flex-col mx-auto my-4 gap-4">
                    <a href="#" className="text-white opacity-80 underline">Perguntas frequentes</a>
                    <a href="#" className="text-white opacity-80 underline">Preferências de cookies</a>
                </div>
                <div className="flex flex-col mx-auto my-4 gap-4">
                    <a href="#" className="text-white opacity-80 underline">Central de Ajuda</a>
                    <a href="#" className="text-white opacity-80 underline">Informações corporativas</a>
                </div>
                <div className="flex flex-col mx-auto my-4 gap-4">
                    <a href="#" className="text-white opacity-80 underline">Termos de Uso</a>
                </div>
                <div className="flex flex-col mx-auto my-4 gap-4">
                    <a href="#" className="text-white opacity-80 underline">Privacidade</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
