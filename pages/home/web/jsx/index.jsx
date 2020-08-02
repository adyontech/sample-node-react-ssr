import React from "react";
import Navbar from "../../../../components/web/nayka-nav/index.jsx";
import ProductListing from "../../../../components/web/ProductListing/index.jsx";
import axios from "axios";
import { debounce } from "../../../../helpers/commonHelper";
import LazyLoad from "../../../../helpers/imgLazyLoad";

class Cities extends React.Component {
  constructor(props) {
    super(props);

    this.debounced = debounce(this.getProdList.bind(this), 500);

    this.offset = 6;
    this.state = {
      inputVal: "",
      itemListingData: props.data.data,
      currentMaxIndex: 12,
      loading: false,
      hasMore: true,
    };
  }

  getProdList(val) {
    this.setState({
      itemListingData: [],
    });
    this.getListApiCall(val, 0);
  }

  componentDidMount() {
    LazyLoad();
  }
  componentDidUpdate() {
    LazyLoad();
  }

  moveToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  onInputChange(e) {
    e.target.value.length > 0 && this.debounced(e.target.value);
  }

  getListApiCall(inputVal, currentMaxIndex) {
    const url = `http://localhost:4000/getData?searchQuery=${inputVal}&currentMaxIndex=${currentMaxIndex}&offset=${this.offset}`;
    console.log(url);
    axios.get(url).then(res => {
      this.setState({
        currentMaxIndex: currentMaxIndex + 6,
        itemListingData: [...this.state.itemListingData, ...res.data.data],
        hasMore: res.data.hasMore,
      });
    });
  }

  loadMore() {
    this.getListApiCall("", this.state.currentMaxIndex);
  }

  render() {
    return (
      <div className="page-container">
        <Navbar
          inputVal={this.state.inputVal}
          onInputChange={this.onInputChange.bind(this)}
        />
        <div className="container">
          <ProductListing
            loading={this.state.loading}
            hasMore={this.state.hasMore}
            data={this.state.itemListingData}
            loadMore={this.loadMore.bind(this)}
          />
        </div>
        <div className="moveToTop" onClick={this.moveToTop.bind(this)}>
          &uarr;
        </div>
      </div>
    );
  }
}

export default Cities;
