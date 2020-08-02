import React from "react";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {};
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
    const { isSideBarOpen, onIconClick } = this.props;
    return (
      <header>
        <div className="main-header home-only-header fixer1">
          {/* <div className="text-center clearfix header-main">
            <button
              aria-label="menu button"
              id="navButton"
              className="gtm-hmmenu fl  lines-button arrow arrow-left trigger-sidebar "
              type="button"
              onClick={() => onIconClick(!isSideBarOpen)}
            >
              <span className="lines "></span>
            </button>
          </div> */}
          {this.props.showBackButton && (
            <div
              className="text-center clearfix header-main"
              onClick={() => window.history.back()}
            >
              {/* <button
                aria-label="menu button"
                id="navButton"
                className="gtm-hmmenu fl  lines-button arrow arrow-left trigger-sidebar "
                type="button"
                onClick={() => onIconClick(!isSideBarOpen)}
              >
                <span className="lines "></span>
              </button> */}
              <img
                className="header-back-icon"
                alt="back icon"
                src="/r-pool/icons/ic-arrow-left-white.svg"
              />
            </div>
          )}
          {this.props.title && (
            <h1 className="page-title">{this.props.title}</h1>
          )}
          <div id="changeBlock" className="gtm-rblogo fr hd-rb-logo">
            <a alt="redbus logo" href="https://redbus.in" id="rb_logo">
              redbus
            </a>
          </div>
        </div>
        {this.getHeaderSchema(this.props.breadCrumb)}
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
                      {" "}
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
      </header>
    );
  }
}

export default HeaderComponent;
