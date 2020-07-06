import React, { Component } from 'react';
import Axios from 'axios';
import List from "./compnent/List";
import Dropdown from "./compnent/viewDropdown";
import Search from "./compnent/Search";
import Pagination from "./compnent/Pagination";

class App extends Component {
  state={
    data:[],
    searchInput: "",
    view: "d-flex flex-column flex-wrap justify-content-around",
    currentPage: 1,
    dataPerPage: 2
  }

  componentDidMount=()=>{
    Axios.get("https://reqres.in/api/users?page=1")
    .then((res)=>{
        this.setState({
          data: res.data.data
        })
      }).catch((err)=>{
        console.log(err)
      }
    )
  }

  handleView=(e)=>{
    if(e.target.value === "Grid"){
      this.setState({
        view: "d-flex flex-row flex-wrap justify-content-around"
      })
    }else{
      this.setState({
        view: "d-flex flex-column flex-wrap justify-content-around"
      })
    }
  }

  handleSearch=(e)=>{
    this.setState({
      searchInput: e.target.value
    })
  }
  
  render() {
    
    const indexOfLastData = this.state.currentPage * this.state.dataPerPage;
    const indexOfFistData = indexOfLastData - this.state.dataPerPage;
    const currentData = this.state.data.slice(indexOfFistData, indexOfLastData);
    let searchedName = this.state.searchInput.toLocaleLowerCase();
    let filteredData = currentData.filter((data)=>{
      return data.first_name.toLocaleLowerCase().indexOf(searchedName) === 0;
    });

    return (
      <div className="fluid-container text-center mt-3">
        <div className="d-inline-flex mb-3">
        <Search
        handleSearch={this.handleSearch}
        />
        <Dropdown
        handleView={this.handleView}
        />
        </div>
        <List
        data={currentData}
        view={this.state.view}
        filteredData={filteredData}
        searchInput={this.state.searchInput}
        tofilterData={(data)=> console.log(data)}
        />
        <Pagination
        totalData={this.state.data.length}
        dataPerPage={this.state.dataPerPage}
        paginate={(page)=>{
          this.setState({
            currentPage: page
          })
        }}
        />
      </div>
    )
  }
}

export default App;
