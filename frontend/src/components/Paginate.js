import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

const Paginate = ({ totalPage, page }) => {
  const location = useLocation();
  const path = location.pathname;
  const baseURL =
    path.split("/page/")[0] === "/" ? "" : path.split("/page/")[0];

  if (totalPage <= 1) return null;

  return (
    <Pagination className=' d-flex justify-content-center my-4' size='md'>
      <LinkContainer
        activeClassName=''
        to={`${baseURL}/page/${page - 1}`}
        disabled={page === 1}
      >
        <Pagination.Prev />
      </LinkContainer>

      {[...Array(totalPage).keys()].map((p) => (
        <LinkContainer key={p} to={`${baseURL}/page/${p + 1}`}>
          <Pagination.Item active={p + 1 === page}>{p + 1}</Pagination.Item>
        </LinkContainer>
      ))}

      <LinkContainer
        activeClassName=''
        to={`${baseURL}/page/${page + 1}`}
        disabled={page === totalPage}
      >
        <Pagination.Next />
      </LinkContainer>
    </Pagination>
  );
};

export default Paginate;
