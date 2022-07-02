import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
    return (
        <div className="header">
            <LinkContainer to={`/`}>
                <div>
                    <div className="container">
                        <header>
                            <img className="logo" src={require("../food.jpg")} />
                            <div>Recipes</div>
                        </header>
                    </div>
                </div>
            </LinkContainer>
        </div>
    )
}

export default Header