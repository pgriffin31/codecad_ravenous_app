

function renderSortByOptions() {
  var sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count' };

  var sortKeys = Object.keys(sortByOptions);
  var listItems = sortKeys.map(sortKey) {
    var sortValue = sortByOptions[sortKey];
  }
  console.log(sortKeys);
  console.log(listItems);
  console.log(sortValue);

}

renderSortByOptions();
/*
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
*/
