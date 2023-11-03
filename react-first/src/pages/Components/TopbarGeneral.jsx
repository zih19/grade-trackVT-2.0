import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

const TopbarGeneral = ({signedIn}) => {
    const[IsOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!IsOpen);
    const linkItems = [
        {path: "./", component: "Home", dropdown: false},
        {path: "./about", component: "About", dropdown: false},
        {path: "./faculty", component: "Faculty", dropdown: true},
    ]

    if (!signedIn) {
        linkItems.push({path: "./login", component:"Login/Sign Up", dropdown: false})
    }

    return(
        <div className="container">
            <div className="top_bar">
                {
                    linkItems.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link"
                        >
                            <div className='link_text'>{item.component}</div>
                        </NavLink>
                    ))
                }

            </div>
        </div>
    );
}
export default TopbarGeneral;