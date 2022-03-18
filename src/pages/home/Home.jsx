import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import {User_Data} from "../../data/Data_moy";
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import { msg_capteur_1 } from '../../data/test';
import Widgetlg from '../../components/Widgetlg/Widgetlg';

import "./home.css";

export default function home() {
  return (
  <div className='home'>
      <FeaturedInfo info1="35" unite1="°C" description1="Capteur1" info2="" unite2="°C" description2="Capteur2" info3="37" unite3="°C" description3="Capteur3" info4="test" unite4="°C" description4="Capteur4"/>
      <Chart data={User_Data} title="Température dans la salle :" grid temp="Température en °C" dataKey="mois"/>
      <div className="homeWidget">
      <WidgetSm Titre="Météo" Jour="Jour" Temperature="" Description="Description"/>
      <Widgetlg/>
      </div>
  </div>
  )
}
