import React, { Component } from 'react';
import '../scss/page.scss';

const Label = ({ name, value, bg = "#ff0d2d" }) => (
  <div style={{ backgroundColor: bg }} className="label"> <span className="name">{name}</span> <span className="value" >{value}</span></div>
)

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page">

        <div className="tab">
          <div className="row">
            <div className="tab-name">PROJECT NAME</div>
            <div className="labels">
              <Label name={"Forks"} value={2} bg={"rgb(0, 38, 255)"} />
              <Label name={"Openned Issues"} value={0} bg={"#ff0d2d"} />
              <Label name={"Watchers"} value={2} bg={"orangered"} />
            </div>
          </div>
          <div className="row">
            <div className="tab-name author">Created by Author_Name at 31/12/2017</div>
            <div className="labels">
              <Label name={"PR"} value={"0"} bg={"rgb(0, 108, 255)"} />
              <Label name={"Branches"} value={"0"} bg={"green"} />
              <Label name={"Languages"} value={"C, Java"} bg={"purple"} />
            </div>
          </div>
          {/* <div className="row">
            <div>Last Commit : 09/04/2019 03:21AM by <span>AwesomeChap</span></div> <div>a5d8e8f7875b41ad41c815c9ee</div>
          </div> */}
          <div className="row">
            <div className="secondary" >Last Commit : 09/04/2019 03:21AM by <span>AwesomeChap</span></div> <div className="secondary" >a5d8e8f7875b41ad41c815c9ee</div>
          </div>
        </div>

      </div>
    )
  }
}