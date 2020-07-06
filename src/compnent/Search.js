import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="text-center d-flex justify-content-center">
                <input type="text" size ="20"  className="form-control" placeholder="Search by names..." onChange={this.props.handleSearch} style={{"width":"200px"}}/>
            </div>
        )
    }
}
