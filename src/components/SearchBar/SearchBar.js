import React from 'react';
import './SearchBar.css';


export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      term: '',
      location: '',
      sortBy: 'best_match'
    });
  }

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rates': 'rating',
    'Most Reviewed': 'review_count'
  }

  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({
      term: '',
      location: '',
      sortBy: sortByOption});
  }

  //handleTermChange(e) {
  //  this.setState({term: e.target.value});
  //}

  //handleLocationChange(e) {
  //  this.setState({location: e.target.value});
  //}

  renderSortByOptions() {
    const sortKeys = Object.keys(sortByOptions);
    const listItems = sortKeys.map(sortKey => {
      let sortValue = sortByOptions[sortKey];
      return(
        <li key={sortValue}
            className={this.getSortByClass(sortValue)}
            onClick={this.state.handleSortByChange(sortValue)}>{sortKey}</li>
      );
    });
    return <ul>{listItems}</ul>;
  }

  render() {
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          {this.renderSortByOptions}
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>"Let's Go"</a>
        </div>
      </div>
    );
  }
}
