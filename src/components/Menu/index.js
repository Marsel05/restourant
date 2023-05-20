

// import React, {useState} from 'react';
// import {NavLink} from "react-router-dom";
// import ice from "../../img/ice1.png"
// import ice2 from "../../img/ice2.png"
// import ice3 from "../../img/ice3.png"
// import ice4 from "../../img/ice4.png"
// import ice5 from "../../img/ice5.png"
// import ice6 from "../../img/ice6.png"
//
// const Menu = () => {
//     const [activeMenu, setActiveMenu] = useState(0);
//     const [desert, setDesert] = useState(0)
//     const [tabs, setTabs] = useState([
//         {
//             title: 'Desserts',
//             image: ice,
//         },
//         {
//             title: 'Hot Drinks',
//             image: ice2,
//         },
//         {
//             title: 'Cold Drinks',
//             image: ice3,
//         },
//         {
//             title: 'National Foods',
//             image: ice4,
//         },
//         {
//             title: 'Eastern cuisine',
//             image: ice5,
//         },
//         {
//             title: 'Fast foods',
//             image: ice6,
//         },
//     ]);
//     const handleCardClick = (index) => {
//         const updatedTabs = tabs.filter((tab, i) => i !== index);
//         setTabs(updatedTabs);
//     };
//     const getDesert = (index) => {
//         setDesert(index)
//     }
//     const handleTabClick = (index) => {
//         setActiveMenu(index);
//     };
//
//
//     return (
//         <div>
//             <div className="menu">
//                 <ul className="menu--list">
//                     {
//                         tabs.map((tab, index) => (
//                             <li key={index}>
//                                 <NavLink to="/menu">
//                                     <center>
//                                         <button
//                                             className={`menu--list__link ${activeMenu === index ? 'active' : ''}`}
//                                             onClick={() => handleTabClick(index)}
//                                         >
//                                             {tab.title} {activeMenu === index && <div className="line"/>}
//                                         </button>
//                                         <div className="liner"></div>
//                                     </center>
//
//
//                                 </NavLink>
//
//                             </li>))
//                     }
//
//
//                 </ul>
//                 <div className="menu--content">
//                     {tabs.map((tab, index) => (
//                         <div key={index}>
//                             <div className="card">
//                                 <button
//                                     className={`card--click ${desert === index ? 'desert' : ''}`}
//                                     onClick={() => getDesert(index)}
//                                 >
//                                     <img src={tab.image} alt="" /> {desert === index && <div className="cream"></div>}
//                                 </button>
//                                 <div className="card--text">
//                                     <div className="card--text__ice">
//                                         <h1>Ice Cream</h1>
//                                         <h4>soda, cream, milk, sugar</h4>
//                                     </div>
//                                     <p>$9.11</p>
//                                 </div>
//                                 <button className="remove-button" onClick={() => handleCardClick(index)}>
//                                     Remove
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 {/*<div className="menu--content">*/}
//
//                 {/*    {*/}
//                 {/*       tabs.map((tab, index) =>(*/}
//                 {/*           <div key={index}>*/}
//                 {/*               <div  className="card">*/}
//                 {/*                   <button  className={`card--click ${desert === index ? 'desert' : ''}`}*/}
//                 {/*                           onClick={() => getDesert(index)} >*/}
//                 {/*                       <img src={tab.image} alt=""/> {desert === index && <div className="cream"></div>}*/}
//                 {/*                   </button>*/}
//                 {/*                   <div className="card--text">*/}
//                 {/*                       <div className="card--text__ice">*/}
//                 {/*                           <h1>Ice Cream</h1>*/}
//                 {/*                           <h4>soda,cream,milk,sugar</h4>*/}
//                 {/*                       </div>*/}
//                 {/*                       <p>$9.11</p></div>*/}
//
//                 {/*               </div>*/}
//                 {/*           </div>*/}
//                 {/*       ))*/}
//                 {/*    }*/}
//
//                 {/*</div>*/}
//             </div>
//
//         </div>
//     );
// };
//
// export default Menu;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ice from '../../img/ice1.png';
import ice2 from '../../img/ice2.png';
import ice3 from '../../img/ice3.png';
import ice4 from '../../img/ice4.png';
import ice5 from '../../img/ice5.png';
import ice6 from '../../img/ice6.png';

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState(0);
    const [desert, setDesert] = useState(0);
    const [tabs, setTabs] = useState([
        {
            title: 'Desserts',
            image: ice,
        },
        {
            title: 'Hot Drinks',
            image: ice2,
        },
        {
            title: 'Cold Drinks',
            image: ice3,
        },
        {
            title: 'National Foods',
            image: ice4,
        },
        {
            title: 'Eastern cuisine',
            image: ice5,
        },
        {
            title: 'Fast foods',
            image: ice6,
        },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [removedCard, setRemovedCard] = useState(null);

    const getDesert = (index) => {
        setDesert(index);
    };

    const handleTabClick = (index) => {
        setActiveMenu(index);
    };

    const handleCardClick = (index) => {
        setSelectedCardIndex(index);
        setRemovedCard(tabs[index]);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCardIndex(null);
    };

    const handleCancel = () => {
        setTabs((prevTabs) => {
            const updatedTabs = [...prevTabs];
            updatedTabs[selectedCardIndex] = removedCard;
            return updatedTabs;
        });
        setShowModal(false);
        setSelectedCardIndex(null);
    };

    return (
        <div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Are you sure you want to remove this card?</h2>
                        <div className="modal-actions">
                            <button className="modal-action-button cancel-button" onClick={handleCancel}>
                                Cancel
                            </button>
                            <button className="modal-action-button remove-button" onClick={handleCloseModal}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="menu">
                <ul className="menu--list">
                    {tabs.map((tab, index) => (
                        <li key={index}>
                            <NavLink to="/menu">
                                <center>
                                    <button
                                        className={`menu--list__link ${activeMenu === index ? 'active' : ''}`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        {tab.title} {activeMenu === index && <div className="line" />}
                                    </button>
                                    <div className="liner"></div>
                                </center>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="menu--content">
                    {tabs.map((tab, index) => (
                        <div key={index}>
                            {selectedCardIndex === index && showModal ? null : (
                                <div className="card">
                                    <button
                                        className={`card--click ${desert === index ? 'desert' : ''}`}
                                        onClick={() => getDesert(index)}
                                    >
                                        <img src={tab.image} alt="" /> {desert === index && <div className="cream"></div>}
                                    </button>
                                    <div className="card--text">
                                        <div className="card--text__ice">
                                            <h1>Ice Cream</h1>
                                            <h4>soda, cream, milk, sugar</h4>
                                        </div>
                                        <p>$9.11</p>
                                    </div>
                                    <button className="remove-button" onClick={() => handleCardClick(index)}>
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Menu;
