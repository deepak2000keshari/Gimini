import React, { useState,useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Context } from "../Context";
import { faBars,faPlus,faMessage,faGem,faQuestionCircle,faClockRotateLeft,faGear} from '@fortawesome/free-solid-svg-icons'; 
const Sidebar = () => {
    const {recent,onSend,Setnewchat} = useContext(Context);
    const [show,setshow] =useState(true);
    console.log(show);
    const sidebarStyle = show ? {} : { maxWidth: '70px' };
    const newChatStyle = show ? {} : { marginTop: '55px',padding: '6px 25px 15px 7px',maxWidth: '0px'};

    const barshow = () => {
        setshow(!show);
    }
  return (
   <div className = "sidebar" style = {sidebarStyle}>
     <div className = "sidecontainer" >
        <ul>
            <li>
                <FontAwesomeIcon icon={faBars}  className="fa-sharp bar clickable" onClick={barshow}/> {/* Use FontAwesomeIcon with   faBars */}
            </li>
            <li>
                <div className= "newchat clickable" onClick = {()=> Setnewchat(true)}style={newChatStyle}>
                   <FontAwesomeIcon icon={faPlus} className="fa-plus" /> 
                    {show&&<span>NewChat</span>}
                </div>
            </li>
                      {show&& <li className='recent'>
                <h5>Recent</h5>
                <ul>
                    {recent.map((item, index) => {
                        return(<li key ={index} onClick={() => onSend(item)}className ="clickable">
                            <FontAwesomeIcon icon={faMessage} className="fa-sharp"/> {/* Use FontAwesomeIcon with   faBars */}
                            <span title={item}>{item}</span>
                        </li>)
                    })}
                   
                </ul>
            </li>} 
        </ul>
        <div className="down">
                    <ul>
                        <li className = "clickable">
                            <FontAwesomeIcon icon={faQuestionCircle} className="fa-sharp"/> {/* Use FontAwesomeIcon with   faBars */}
                            {show&&<span>Help</span>} 
                        </li>
                        <li className = "clickable">
                            <FontAwesomeIcon icon={faClockRotateLeft} className="fa-sharp"/> {/* Use FontAwesomeIcon with   faBars */}
                            {show&&<span>Activity</span>} 
                        </li>
                        <li className = "clickable">
                            <FontAwesomeIcon icon={faGear} className="fa-sharp"/> {/* Use FontAwesomeIcon with   faBars */}
                            {show&&<span>Settings</span>} 
                        </li>
                    </ul>
        </div>
     </div>
   </div>
  )
}

export default Sidebar