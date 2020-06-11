import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

import "./Pagination.scss";

export default class Pagination extends Component {
  render() {
    return (
      <div className="pagination" style={this.props.style}>
        <ReactPaginate
          previousLabel=""
          nextLabel=""
          breakLinkClassName="break-link"
          pageCount={this.props.totalPages}
          forcePage={this.props.currentPage}
          onPageChange={this.props.onChangePage}
        />
      </div>
    );
  }
}
