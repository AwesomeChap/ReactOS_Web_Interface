import React, { Component } from 'react';
import '../scss/filter.scss';

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      c_hash : "",
      r_name : "",
      pr_no : "",
      a_name: "",
    };
  }

  handleClick = (e,selectedItemIndex) => {
    this.setState({ selected: selectedItemIndex });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    let filters = ["Show All", "Commit Hash", "Repository", "PR No", "Author"];
    let filters2 = filters.map((f, i) => {
      return (
        <div data-name={f} className={this.state.selected === i ? "selected filter" : "filter"} onClick={(e) => { this.handleClick(e,i) }} key={"filter-" + i}>{f}</div>
      )
    })

    return (
      <div className="filter-container-wrapper">
        <div className="filter-container">
          {filters2}
          {this.state.selected === 1 &&  <input onChange={this.handleChange} value={this.state.c_hash} name="c_hash" className="input" placeholder="Enter Commit Hash" />}
          {this.state.selected === 2 &&  <input onChange={this.handleChange} value={this.state.r_name} name="r_name" className="input" placeholder="Enter Repository Name" />}
          {this.state.selected === 3 &&  <input onChange={this.handleChange} value={this.state.pr_no} name="pr_no" className="input" placeholder="Enter Enter PR No." />}
          {this.state.selected === 4 &&  <input onChange={this.handleChange} value={this.state.a_name} name="a_name" className="input" placeholder="Enter Author Name" />}
        </div>
        {
          !this.state.selected ? (
            <div className="filter-msg">Showing All Repositories. Choose any option above to filter repositories</div>
          ):(
            <div className="filter-msg">Filtering Repositories according to <span>{filters[this.state.selected]}</span></div>
          )
        }
      </div>
    );
  }
}