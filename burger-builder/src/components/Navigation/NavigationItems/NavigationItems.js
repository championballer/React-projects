import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>BURGER BUILDER</NavigationItem>
        <NavigationItem link="/">CHECKOUT</NavigationItem> 
    </ul>
);

export default navigationItems;