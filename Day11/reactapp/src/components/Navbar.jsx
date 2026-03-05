import logo from '../assets/image1.jpg'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} />
          <p>Equip</p>
        </div>
        <div className='rightSection'>
          <div className="navItems">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Profile</a>
          </div>
          <div className="btn">
            <button onClick={() => alert("Login successful")}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar