import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="left-nav">
            <img 
                src={logo}
                className="nav-logo"
                alt="React Logo"
            />
            <h3>ReactFacts</h3>
        </div>
        <h4 className="nav-items">
            React Course - Project 1       
        </h4>
    </nav>
  )
}

export default Navbar;