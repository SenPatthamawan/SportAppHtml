import usePost from "./hook/usePost";
import { getUser } from "./hook/me";
import "./App.css";
import { useState } from "react";

const App = () => {
  return (
    <div>
      <Header/>
      <Activity/>
      <NavMenu/>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <h1>Activity Type</h1>
      <SearchBox/>
    </div>
  )
}

const SearchBox = () => {
  return (
    <div>
      <input placeholder="Search here..."></input>
    </div>
  )
}

const Activity = () => {
  return (
    <div>
      <ActivityCard/>
    </div>
  )
}

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <img src="https://www.byrdie.com/thmb/NcBp5_4cbMIWXgTaOrJGDLzeiNA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Stocksy_txp35f99a2eKb6300_Medium_3271355-fb417f0d8a9a4f959edec6e0dfb83c34.jpg"/>
      <div className="activity-card-content">
        <h3>Yoga</h3>
        <span>Yoga is mind</span>
        <button>Start</button>
      </div>
    </div>
  )
}

const NavMenu = () => {
  return (
    <div className="nav-menu">
      <div>Home</div>
      <div>Activity</div>
      <div>History</div>
      <div>Setting</div>
    </div>
  )
}


export default App;
