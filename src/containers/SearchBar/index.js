import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  wakeUpHerokuServerFromSleep,
  fetchRecipesAndPage,
  showClickedInfo,
  showHideFavorites,
} from '../../actions/';
import './style.css';

import ButtonSearch from '../../components/ButtonSearch';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      page: 1,
      fav: 'Show',
    };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowHideFavorites = this.handleShowHideFavorites.bind(this);
  }

  componentDidMount() {
    this.props.wakeUpHerokuServerFromSleep();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ term: this.props.showClickedInfoFromStore });
      this.checker(this.props);
    }
  }
  // If some ingredient was manually selected
  // go to page 1 of that ingredient
  checker(properties) {
    if (properties.manualSelectionFromStore) {
      this.setState({ page: 1 });
    }
  }
  // If input was changed go to page 1
  handleInputChange(event) {
    this.setState({ page: 1 });
    this.setState({ term: event.target.value });
  }
  // After submit, go to page 1 and fetch data
  handleSubmit(event) {
    this.setState({ page: 1 });
    if (this.state.term === '') {
      event.preventDefault();
      this.props.showClickedInfo('');
    } else {
      event.preventDefault();
      this.props.fetchRecipesAndPage(this.state.term, 1);
      this.props.showClickedInfo(this.state.term);
    }
  }

  handlePrev() {
    let newPage = this.state.page - 1;
    if (newPage <= 0) {
      newPage = 1;
    }
    this.setState({ page: newPage });
    this.props.fetchRecipesAndPage(this.props.currentSearchFromStore, newPage);
  }

  handleNext() {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage });
    this.props.fetchRecipesAndPage(this.props.currentSearchFromStore, newPage);
  }

  handleShowHideFavorites() {
    this.props.showHideFavorites();
    if (this.state.fav === 'Show') {
      this.setState({ fav: 'Hide' });
    } else {
      this.setState({ fav: 'Show' });
    }
  }

  buttonsView() {
    // Show navigation buttons (prev, next):
    // If there is an error coming from Recipe Puppy server
    // OR
    // If current search isn't null AND app found some data and successfully fetched that data
    if (
      this.props.error ||
      (this.props.currentSearchFromStore !== null &&
        this.props.checkIfSomeDataWasFound)
    ) {
      return (
        <div>
          <button className="btn btn-secondary" onClick={this.handlePrev}>
            Prev Page
          </button>
          <span className="SearchBar-page-numbers">{this.state.page}</span>
          <button className="btn btn-secondary" onClick={this.handleNext}>
            Next Page
          </button>
        </div>
      );
    }
    return <div />;
  }

  favButtonsView() {
    return (
      <div className="SearchBar-fav-button">
        <button
          className="btn btn-secondary"
          onClick={this.handleShowHideFavorites}
        >
          {this.state.fav} Favorites
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="SearchBar-input-group">
          <input
            className="form-control"
            placeholder={this.props.showClickedInfoFromStore}
            value={this.state.term}
            onChange={this.handleInputChange}
          />
          <ButtonSearch className="btn btn-secondary submit">
            Search
          </ButtonSearch>
        </form>
        <div className="SearchBar-pagination-buttonsView">
          {this.buttonsView()}
        </div>
        <div className="SearchBar-pagination-favButtonsView">
        {this.favButtonsView()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.error,
    currentSearchFromStore: state.currentSearchTerm,
    checkIfSomeDataWasFound: state.checkRecipesData,
    showClickedInfoFromStore: state.showClickedInfo,
    manualSelectionFromStore: state.manualSelection,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      wakeUpHerokuServerFromSleep,
      fetchRecipesAndPage,
      showClickedInfo,
      showHideFavorites,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
