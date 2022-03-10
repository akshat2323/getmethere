import './navbar.css'


function Navbar() {
    return ( <div>
        <div className="container-fluid d-flex navbar">
            <div className="icon">
                <span>GetMeThere</span>
            </div>
            <div className="navlinks">
                <ul>
                    <li><a className='left px-4' href="#">Home</a></li>
                    <li><a className='left px-4' href="#">About</a></li>
                    <li><a className='left px-4' href="#">States</a></li>
                    <li><a className='left px-4' href="#">All Pilgims</a></li>
                    <li><a className='left px-4' href="#">Services</a></li>
                    <li><a className='left px-4' href="#">Contact</a></li>
                </ul>
            </div>
            <a className='left' href="#">Login</a>
        </div>
    </div> );
}

export default Navbar;