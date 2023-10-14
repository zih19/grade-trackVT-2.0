import React, { useState } from 'react';
import NavLink from 'react-router-dom';


const TopbarGeneral = () => {
    const[IsOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!IsOpen);
    const linkItems = [
        {path: "./", component: "Home", dropdown: false},
        {path: "./about", component: "About", dropdown: false},
        {path: "./faculties", component: "Faculties", dropdown: true},
        {path: "./login", component:"Login/Signup", dropdown: false}
    ]

    const linkAchieve = () => {
       
    }

    return(
        <div className="container">
            <div className="topbar_pages">
           

            </div>
        </div>
    );
}
export default TopbarGeneral;