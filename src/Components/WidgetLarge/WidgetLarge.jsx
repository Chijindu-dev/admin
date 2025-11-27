import React from 'react'
import avatar from "../../assets/avatar.jpg";
import "./widgetlarge.css"

const WidgetLarge = () => {
  const Button = ({ type }) => {
  return <button className={"widgetlgButton " + type}>{type}</button>;
}


  return (
    <div className='widgetlarge'>
        <h3 className="widgetlgTitle">Latest Transactions</h3>

      <table className="widgetlgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>

        <tr className="widgetlgTr">
          <td className='widgetlgUser'>
              <img src={avatar} alt="" className="widgetlgImg" />
              <span className="widgetlgName">Susan Carol</span>
          </td>
          <td className='widgetlgDate'>2 june 2025</td>
          <td className='widgetlgAmount'>$122.00</td>
          <td className='widgetlgStatus'><Button type="Approved"/></td>
        </tr>
         <tr className="widgetlgTr">
          <td className='widgetlgUser'>
              <img src={avatar} alt="" className="widgetlgImg" />
              <span className="widgetlgName">Susan Carol</span>
          </td>
          <td className='widgetlgDate'>2 june 2025</td>
          <td className='widgetlgAmount'>$122.00</td>
          <td className='widgetlgStatus'><Button type="Declined"/></td>
        </tr>

         <tr className="widgetlgTr">
          <td className='widgetlgUser'>
              <img src={avatar} alt="" className="widgetlgImg" />
              <span className="widgetlgName">Susan Carol</span>
          </td>
          <td className='widgetlgDate'>2 june 2025</td>
          <td className='widgetlgAmount'>$122.00</td>
          <td className='widgetlgStatus'><Button type="Pending"/></td>
        </tr>

         <tr className="widgetlgTr">
          <td className='widgetlgUser'>
              <img src={avatar} alt="" className="widgetlgImg" />
              <span className="widgetlgName">Susan Carol</span>
          </td>
          <td className='widgetlgDate'>2 june 2025</td>
          <td className='widgetlgAmount'>$122.00</td>
          <td className='widgetlgStatus'><Button type="Approved"/></td>
        </tr>
        
      </table>

    </div>
  )
}

export default WidgetLarge