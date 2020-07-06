import React, { Component } from 'react'

export default class viewDropdown extends Component {
    render() {
        return (
            <div className="text-center d-flex justify-content-center">
                {/* <label className="text-danger">View: </label> */}
                <select onChange={this.props.handleView} className="form-control" style={{"width":"100px"}}>
                    <option>List</option>
                    <option>Grid</option>
                </select>
            </div>
        )
    }
}
