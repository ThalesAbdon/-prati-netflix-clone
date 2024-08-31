import netflixlogo from '../assets/Netflix-Logo-500x281.png';

const Header = () => {
    return (
        <div className="flex ml-40 md:ml-0 md:justify-center">
            <img src={netflixlogo} alt="logo da NetFlix" className="h-20 w-auto" />
        </div>
    );
};

export default Header;
