import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
  }
  getHeaderSchema(data = []) {
    const itemListElement = data.map((elm, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@id": elm.Url,
          name: elm.path,
        },
      };
    });
    const script = JSON.stringify([
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
      },
    ]);

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: script }}
      />
    );
  }
  render() {
    return (
      <div className="navigation-bar">
        <div className="nav-container">
          <a href="https://www.redbus.in" className="redbus-logo">
            redbus
          </a>
          <div className="nav-menu">
            <nav>
              <ul className="nav-ul">
                <li className="nav-li">
                  <a href="https://www.redbus.in/bus-tickets">BUS TICKETS</a>
                </li>
                <li className="nav-li nav-rpool">
                  <a href="/rpool">rPool</a>
                </li>
                <li className="nav-li">
                  <a href="/bushire">BUS HIRE</a>
                </li>
                <li className="nav-li">
                  <a href="https://www.redbus.in/pilgrimages/">PILGRIMAGE</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {this.props.showBreadCrumb && (
          <div className="breadcrumb-block">
            <ul className="breadcrumb-ul">
              {this.props.breadCrumb.map((elm, index) => {
                return (
                  <li className="breadcrumb-li">
                    <a
                      style={
                        index < this.props.breadCrumb.length - 1
                          ? { color: "red" }
                          : { color: "white" }
                      }
                      href={elm.Url}
                    >
                      {elm.path}
                    </a>
                    <span className="breadcrumb-span">
                      {index < this.props.breadCrumb.length - 1 && (
                        <span> &gt; </span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {this.getHeaderSchema(this.props.breadCrumb)}
      </div>
    );
  }
}

export default Header;
