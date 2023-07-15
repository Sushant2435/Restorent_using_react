import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuapi"
import Navbar from "./Navbar"
import MenuCard from './MenuCard'

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];
const Restorent = () => {
    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData);
    const [menulist, setmenulist] = useState(uniqueList);
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            console.log(curElem.category);

            return curElem.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menulist} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restorent
