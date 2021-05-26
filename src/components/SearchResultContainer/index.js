import React, { Component } from "react";
import SearchForm from "../SearchForm/index";
import Results from "../Results/index";
import Title from "../Title/index";
// import "./style.css";
import API from "../../utils/API";
class SearchResultContainer extends Component {
  state = {
    // search
    search: "",
    // results
    results: [],
    // sorted name
    sort: "DESC",
  };

  // component did mount calls searchUsers
  componentDidMount() {
    this.searchUsers("");
  }

  searchUsers = (query) => {
    API.search(query).then((res) => {
      this.setState({ results: res.data.results });
    });
  };

  handleInputChange = (event) => {
    if (event.target.name === "search") {
      const search = event.target.value.toLowerCase();
      this.setState({
        search: search,
      });
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchUsers(this.state.search);
  };

  // sort by first name
  sortByName = () => {
    const alphabetizedResults = this.state.employees.sort((a, b) => {
      return a.name.first > b.name.first ? 1 : -1;
    });

    if (this.state.sort === "DESC") {
      alphabetizedResults.reverse();
      this.setState({ sort: "ASC" });
    } else {
      this.setState({ sort: "DESC" });
    }
    this.setState({ employees: alphabetizedResults });
  };

  // sort by phone
  sortByPhone = () => {
    let phoneResults = this.state.results.sort((a, b) => {
      return parseInt(a.phone.trim().replace(/-()/), "") -
        parseInt(b.phone.trim().replace(/-()/), "")
        ? 1
        : -1;
    });
    this.setState({ employees: phoneResults });
  };

  render() {
    return (
      <div>
        <Title />
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Results
          search={this.state.search}
          results={this.state.results}
          sortByName={this.sortByName}
          sortByEmail={this.sortByEmail}
          sortByPhone={this.sortByPhone}
          sortByDOB={this.sortByDOB}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
