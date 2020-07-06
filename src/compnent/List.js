import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div class="container d-flex justify-content-center" style={{"borderRadius":"35px"}}>
                <div className={this.props.view}>
                {this.props.searchInput === "" ? this.props.data.map(data=>{
                    return(
                        <div className="card mb-3 bg-light shadow px-3 mx-2 mt-3" style={{"max-width": "540px","border":"none","borderRadius":"10px"}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={data.avatar} className="card-img  my-3" alt="..." style={{"height":"150px"}} />
                            </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center">Information</h5>
                            <hr/>
                            <p className="card-text">Name: {data.first_name} {data.last_name}</p>
                            <p className="card-text">Email: {data.email}</p>
                        </div>
                    </div>
                </div>
            </div>
                )}) : !this.props.filteredData[0]? <p>No data Found!</p>: this.props.filteredData.map(data=>{
                    return(
                        <div className="card mb-3 bg-light shadow px-3 d-flex mx-2" style={{"max-width": "540px","border":"none","borderRadius":"10px"}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={data.avatar} className="card-img  my-3" alt="..." style={{"height":"150px"}} />
                            </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center">Information</h5>
                            <hr/>
                            <p className="card-text">Name: {data.first_name} {data.last_name}</p>
                            <p className="card-text">Email: {data.email}</p>
                        </div>
                    </div>
                </div>
            </div>
                )})}
                </div>
            </div>
        )
    }
}
