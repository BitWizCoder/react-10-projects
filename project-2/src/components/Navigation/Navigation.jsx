import styles from "./Navigation.module.css"

function Navigation() {
    return (
        <nav className={`${styles.navigation} container`}>
            <div className="logo">
                <img src="/logo.png" alt="logo" />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation