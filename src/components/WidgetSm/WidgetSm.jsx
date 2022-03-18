import { Visibility, Waves, WbCloudy, WbSunny } from '@material-ui/icons';
import React from 'react';
import "./WidgetSm.css"

export default function WidgetSm({Titre,Jour1,Temperature1,Description1,icone1,Jour2,Temperature2,Description2,icone2,Jour3,Temperature3,Description3,icone3,Jour4,Temperature4,Description4,icone4,Jour5,Temperature5,Description5,icone5}) {

  return (
  <div className='widgetSmall'>
      <span className="widgetSmTitle">{Titre}</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <WbCloudy className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">{Temperature1}°C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{Jour1}</span>
                  <span className="widgetSmUserTitle">{Description1}</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className={icone1}/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
            <WbCloudy className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">{Temperature2}°C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{Jour2}</span>
                  <span className="widgetSmUserTitle">{Description2}</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className={icone2}/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
            <WbCloudy className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">{Temperature3}°C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{Jour3}</span>
                  <span className="widgetSmUserTitle">{Description3}</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className={icone3}/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
            <WbCloudy className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">{Temperature4}°C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{Jour4}</span>
                  <span className="widgetSmUserTitle">{Description4}</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className={icone4}/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
            <WbCloudy className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">{Temperature5}°C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{Jour5}</span>
                  <span className="widgetSmUserTitle">{Description5}</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className={icone5}/>
                  Voir plus
              </button>
          </li>
      </ul>
  </div>
  )
}
//