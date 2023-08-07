const Navigation = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src="./images/brand_logo.png" alt="Logo" />
            </div>

            <ul>
                <li><a href="#">menu</a></li>
                <li><a href="#">location</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
            </ul>

            <button>Login</button>
        </nav>
    )
}

export default Navigation;