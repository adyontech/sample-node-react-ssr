import React from "react";
const menuList = [
  {
    icon: "/r-pool/icons/user.svg",
    name: "Sign in / Sign up",
    link: "/",
  },
  {
    icon: "/r-pool/icons/magnify.svg",
    name: "Search Buses",
    link: "/",
  },
  {
    icon: "/r-pool/icons/ratingSort.svg",
    name: "offers",
    link: "offers",
  },
  {
    icon: "/r-pool/icons/refer.svg",
    name: "Refer & Earn",
    link: "/refer",
  },
  {
    icon: "/r-pool/icons/help.svg",
    name: "Help",
    link: "/help",
  },
  {
    icon: "/r-pool/icons/entrance.svg",
    name: "Get Ticket Details",
    link: "/searchticket",
  },
  {
    icon: "/r-pool/icons/tnc.svg",
    name: "About Us",
    link: "/aboutus",
  },
  {
    icon: "/r-pool/icons/srp_ZeCaFe.svg",
    name: "Cancel Ticket",
    link: "/cancellation",
  },
  {
    icon: "/r-pool/icons/rescheduleIcon.svg",
    name: "Reschedule Ticket",
    link: "/reschedule",
  },
  {
    icon: "/r-pool/icons/settings.svg",
    name: "Settings",
    link: "/",
  },
];
class SideDrawer extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {};
  }
  render() {
    const { open, onOverlayClick } = this.props;
    return (
      <div
        className="sidebar"
        style={open ? { width: " 100%" } : { width: 0, overflow: "hidden" }}
        onClick={() => onOverlayClick()}
      >
        <div className="overflow">
          <div
            className="slide-nav banner-div open"
            style={open ? { width: " 80%" } : { width: 0, overflow: "hidden" }}
          >
            <ul className="menu-list">
              {menuList.map(listItem => (
                <li className="menu-li">
                  <span className="icon icon-user menu-icons">
                    <img
                      style={{ width: "1em", height: "1em" }}
                      src={listItem.icon}
                      alt={listItem.name}
                    />
                  </span>
                  <span className="menu-name">
                    <a href={listItem.link}>{listItem.name}</a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default SideDrawer;
