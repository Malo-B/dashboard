import "../../pages/home/temperature/temperature"
import "../../pages/home/Home"
import "../../pages/weather/Weather"

import "./sidebar.css"

import { AccountCircle, Home, WbSunny, Notifications, BatteryFull, CompareArrows, Waves, AcUnit} from '@material-ui/icons';
import OpacityIcon from '@material-ui/icons/Opacity';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return <div className='Sidebar'>
      <div className="sideWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle"> Dasboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <Home className='sidebarIcon'/>
                    <Link to="/">Home</Link>
                        
                </li>
                <li className="sidebarListItem">
                    <AcUnit className='sidebarIcon'/>
                    <Link to="temperature">Température</Link>
                    
                </li>
                <li className="sidebarListItem">
                    <OpacityIcon className='sidebarIcon'/>
                    Humidité
                </li>
                <li className="sidebarListItem">
                    <CompareArrows className='sidebarIcon'/>
                    Pression
                </li>
                <li className="sidebarListItem">
                    <Waves className='sidebarIcon'/>
                    Fuite d'eau
                </li>
                <li className="sidebarListItem">
                    <BatteryFull className='sidebarIcon'/>
                    Batterie
                </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle"> Les capteurs</h3>
            <ul className="sidebarList">
            <li className="sidebarListItem">
                    <AcUnit className='sidebarIcon'/>
                    <Link to="capteur1">Capteur température 1</Link>
                </li>
                <li className="sidebarListItem">
                    <AcUnit className='sidebarIcon'/>
                    Capteur température 2
                </li>
                <li className="sidebarListItem">
                    <AcUnit className='sidebarIcon'/>
                    Capteur température 3
                </li>
                <li className="sidebarListItem">
                    <Waves className='sidebarIcon'/>
                    Capteur fuite d'eau 1
                </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle"> Autres</h3>
            <ul className="sidebarList">
            <li className="sidebarListItem">
                    <AccountCircle className='sidebarIcon'/>
                    Utilisateurs
                </li>
                <li className="sidebarListItem">
                    <Notifications className='sidebarIcon'/>
                    Notifications
                </li>
                <li className="sidebarListItem">
                    <WbSunny className='sidebarIcon'/>
                    <Link to="weather">Météo</Link>
                </li>
            </ul>
          </div>
      </div>
  </div>;
}
