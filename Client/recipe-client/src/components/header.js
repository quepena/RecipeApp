import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
    return (
        <LinkContainer to={`/`}>
            <div className="header">
                <div className="container">
                    <header>
                        <img className="logo" src={require("../food.jpg")} />
                        <div>Recipes</div>
                    </header>
                </div>
            </div>
        </LinkContainer>
    )
}

export default Header