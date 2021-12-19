import React from 'react'

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Food App</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt={"Delicious foods"} />
            </div>
        </React.Fragment>
    )
}

export default Header;
