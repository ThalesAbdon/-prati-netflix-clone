import fundo from '../assets/imagem-fundo-netflix.jpg';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext.jsx';
import { Navigate } from 'react-router-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const { setIsLogged } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        document.body.style.background = `linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url(${fundo})`;
    }, []);

    const validate = () => {
        const newErrors = {};

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Informe um email válido.';
        }

        if (!formData.password || formData.password.length < 6) {
            newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
        }
        
        return newErrors;
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleLogin = () => {
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsLogged(true);
            setRedirect(true);
        }
    };

    if (redirect) {
        return <Navigate to='/perfil' />;
    }

    return (
        <div className="box-border mx-auto flex flex-col justify-center max-w-[450px] p-4 bg-black bg-opacity-70">
            <form className="flex flex-col">
                <h1 className="text-white text-2xl mb-4">Entrar</h1>
                <input
                    type="text"
                    placeholder="Email"
                    className={`box-border w-full p-4 mb-4 text-sm font-normal text-white bg-[#161616] bg-opacity-70 border border-gray-500 rounded ${errors.email ? 'border-red-500' : ''}`}
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <p className="flex items-center gap-1.5 text-red-500 text-xs mt-1">
                        <IoIosCloseCircleOutline className="w-6 h-6" />
                        {errors.email}
                    </p>
                )}
                <input
                    type="password"
                    placeholder="Senha"
                    className={`box-border w-full p-4 mb-4 text-sm font-normal text-white bg-[#161616] bg-opacity-70 border border-gray-500 rounded ${errors.password ? 'border-red-500' : ''}`}
                    onChange={handleChange}
                    name="password"
                    id='password'
                    value={formData.password}
                />
                {errors.password && (
                    <p className="flex items-center gap-1.5 text-red-500 text-xs mt-1">
                        <IoIosCloseCircleOutline className="w-6 h-6" />
                        {errors.password}
                    </p>
                )}
                <button
                    type='button'
                    id='entrar'
                    className="w-full py-2 text-base font-medium bg-red-700 text-white rounded cursor-pointer"
                    onClick={handleLogin}
                >
                    Entrar
                </button>
                <label id='ou' className="text-center my-4 text-white">OU</label>
                <button
                    type='button'
                    id='codigo'
                    className="w-full py-2 text-base font-medium text-white bg-gray-600 bg-opacity-50 rounded cursor-pointer"
                >
                    Usar um código de acesso
                </button>
                <a href="#" className="text-center text-white mt-4">Esqueceu a senha?</a>
            </form>
            <label htmlFor="lembre-se" id="label-lembrar" className="flex items-center text-white mt-4">
                <input type="checkbox" name="lembre-se" id="lembrar" className="w-5 h-5 mr-4" />
                Lembre-se de mim
            </label>
            <p className="text-white mt-4">
                Novo por aqui? <a href="#" className="text-blue-600">Assine agora</a>.
            </p>
            <p id='saiba' className="text-sm text-white text-opacity-50 mt-4">
                Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#" className="text-blue-600">Saiba mais.</a>
            </p>
        </div>
    );
};

export default LoginForm;
