import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        let pages = [];
        for(let i = 1; i<=Math.ceil(6/2); i++){
            pages.push(i);
        }
        return (
            <nav>
                <ul className="pagination d-flex justify-content-center">
                    {pages.map(page=>{
                        return(
                        <li key={page} className="page-item">
                            <a href="!#" className="page-link" onClick={()=>this.props.paginate(page)}>{page}</a>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
