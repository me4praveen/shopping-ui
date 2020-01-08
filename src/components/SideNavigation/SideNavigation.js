import React, { useState } from 'react';
import './SideNavigation.scss';

function SideNavigation() {
    const [isOpen, setIsOpen] = useState(false)
    console.log('Side navigation component');
    const toggleSideNav = () => {
        console.log('toggle SideNav')
        setIsOpen(!isOpen);
    }
    return (
        isOpen ?
            <div className="wrapper">
                <nav id="sidebar">
                    <div id="dismiss" onClick= {toggleSideNav}>
                        <i className="fas fa-arrow-left"></i>
                    </div>

                    <div className="sidebar-header">
                        <h3>Bootstrap Sidebar</h3>
                    </div>

                    {/* <ul className="list-unstyled components">
                        <p>Dummy Heading</p>
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">About</a>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul> */}
                </nav>
    {/* <div className="overlay"></div> */}
            </div>
            : <button type="button" className="sidebar-toggle-btn" onClick={toggleSideNav}><span className="navbar-toggler-icon"></span></button>
    )
}
export default React.memo(SideNavigation);
