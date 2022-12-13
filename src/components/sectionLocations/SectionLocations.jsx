import React from 'react'
import { NavLink } from "react-router-dom";

export default function SectionLocations() {
  return (
    <div id="sectionLocations">
    <div className="box">
      <img src="../assets/shared/desktop/illustration-canada.svg" alt="" />
      <h2>canada</h2>
      <NavLink to='/locations'><button className="btn-style2">SEE LOCATION</button></NavLink>
    </div>

    <div className="box">
      <img
        src="../assets/shared/desktop/illustration-australia.svg"
        alt=""
      />
      <h2>australia</h2>
      <NavLink to='/locations'><button className="btn-style2">SEE LOCATION</button></NavLink>
    </div>

    <div className="box">
      <img
        src="../assets/shared/desktop/illustration-united-kingdom.svg"
        alt=""
      />
      <h2>United kingdom</h2>
      <NavLink to='/locations'><button className="btn-style2">SEE LOCATION</button></NavLink>
    </div>
  </div>
  )
}
