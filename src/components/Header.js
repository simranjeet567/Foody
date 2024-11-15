import logopic from '../utils/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src={logopic} alt="foody image" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li className='home'>Home</li>
                    <li className='aboutus'>About Us</li>
                    <li className='contactus'>Contact Us</li>
                    <li className='cart'>Cart</li>
                </ul>
            </div>
        </div>
    );
};

//exporting or sending out the Header component, wherever it is required.
export default Header;