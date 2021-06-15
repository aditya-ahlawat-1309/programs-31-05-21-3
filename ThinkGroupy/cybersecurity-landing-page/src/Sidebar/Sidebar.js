import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BatteryStdIcon from '@material-ui/icons/BatteryStd';
import FolderIcon from '@material-ui/icons/Folder';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TollIcon from '@material-ui/icons/Toll';


function Sidebar() {
    return (
        <>
       <div className="NavigationStyled">
        
            
            <ul className="nav-items" style={{color:"white",width:"85%"}}>
                <li className="nav-item">
                    <a to="/"><TollIcon style={{marginTop:"15px",color:"white"}}/></a>
                </li>
                <li className="nav-item">
                    <a to="/"><HomeIcon style={{marginTop:"75px"}}/></a>
                </li>
                <li className="nav-item">
                    <a to="/"><AssessmentIcon style={{marginTop:"15px"}}/></a>
                </li>
                <li className="nav-item">
                    <a to="/"><BatteryStdIcon style={{marginTop:"15px"}}/></a>
                </li>
                <li className="nav-item">
                    <a to="/"><FolderIcon style={{marginTop:"15px"}}/></a>
                </li>
                <li className="nav-item">
                    <a to="/"><CalendarTodayIcon style={{marginTop:"15px"}}/></a>
                </li>
                <li className="nav-item">
                    <a to="/"><GroupIcon style={{marginTop:"15px"}}/></a>
                </li>
                  <li className="nav-item">
                    <a to="/"><ChatIcon style={{marginTop:"15px"}}/></a>
                </li>
                  <li className="nav-item">
                    <a to="/"><ExitToAppIcon style={{marginTop:"15px"}}/></a>
                </li>
                 
            </ul>

            <footer className="footer_sidebar">
                <p className="p"><SettingsIcon style={{marginTop:"170px",color:"white"}}/></p>
            </footer>

            <div class="sidebar_border"></div>
        </div>
        </>
    )
}

export default Sidebar;
