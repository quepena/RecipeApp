const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <header>
                    <div>
                        <img className="logo" src={require("../food.jpg")} />
                    </div>
                    <div className="items">
                        <div className="items-els">Recipes</div>
                        <div className="items-els">Favorites</div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header