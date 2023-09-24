import React from 'react';
import { Card, Col } from 'react-bootstrap';
import faroff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';
import './productsDetails.css'

const ProductCard = ({item}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-5"
        style={{
          width: "100%",
          height: "100%",
          minHeight:"380px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={faroff}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">
              {item.title}
            </div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between flex-column">
              <div className="d-flex">
                <div className="card-price">${item.price}</div>
              </div>
            </div>
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">4.5</div>
              </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
