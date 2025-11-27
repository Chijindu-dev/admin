import React from 'react'
import FeaturedInfo from '../../Components/FeaturedInfo/featuredInfo'
import Chart from '../../Components/Charts/chart';
import data from "../../dummy";
import "./home.css"
import Widgetsmall from '../../Components/Widgetsmall/Widgetsmall';
import WidgetLarge from '../../Components/WidgetLarge/WidgetLarge';





const home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={data} title="Sales" grid dataKey="Sales"/>
        <div className="homeWidget">
          < Widgetsmall/>
          <WidgetLarge/>
        </div>
    </div>
  )
}

export default home