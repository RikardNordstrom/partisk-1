import React, { Component, PropTypes } from "react";
import Link from "./Link";

import { connectToStores } from "fluxible-addons-react";

import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

class Page extends Component {
  static propTypes = {
    footer: PropTypes.bool
  }

  static defaultProps = {
    footer: true
  }

  render() {
    let { footer } = this.props;

    let footerContainer = footer ? (
      <div className="footer">
        <Footer />
      </div>
    ) : null;

    return (
      <div>
        <div className="navbar">
          <a href="/" className="logo"><i className="el el-ok"></i>Partisk</a>
          <SearchBar />
          <ul id="menu">
            <li><Link routeName="home">Overview</Link></li>
            <li><Link routeName="questions">Questions</Link></li>
            <li><Link routeName="parties">Parties</Link></li>
            <li><Link routeName="tags">Tags</Link></li>
            <li><Link routeName="tags">Quiz</Link></li>
            <li><Link routeName="tags">About</Link></li>
          </ul>
        </div>
        <div className="content">
          { this.props.children }
        </div>
        { footerContainer }
      </div>
    );
  }
}

export default Page;
