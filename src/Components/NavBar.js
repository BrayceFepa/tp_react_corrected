import React from "react";
import { ShoppingCart, ArrowDropDown } from "@mui/icons-material";

function NavBar({ cart, handleQuantity }) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white fixed-top mt-5 px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            COLO<span className="text-danger">SHOP</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PROMOTION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PAGES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="icon-shop">
            <span id="counter">{cart.length}</span>

            <span
              className="iconshop"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <ShoppingCart />
            </span>
          </div>
        </div>
      </nav>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-component">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Your Cart
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {cart.length === 0 ? (
              <p className="h4 text-center text-danger py-3">
                There are no items in the cart
              </p>
            ) : (
              cart.map((product) => (
                <div class="modal-body modalcart border-danger">
                  <div className="modal-img">
                    <img
                      src={product.img}
                      width="200"
                      className="img-fluid"
                    ></img>
                  </div>

                  <div className="info-box">
                    <div className="product-title my-2">
                      <span className="title fw-bold">Title: </span>
                      <span className="title">{product.title}</span>
                    </div>

                    <div className="product-title my-2">
                      <span className="title fw-bold">Price: </span>
                      <span className="title">
                        {product.price * product.quantity} $
                      </span>
                    </div>

                    <div className="product-quantity d-flex justify-content-between my-2 align-items-center ">
                      <span className="title me-3 fw-bold">Quantity: </span>

                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          className="btn btn-danger me-3"
                          onClick={() => handleQuantity(product, 1)}
                        >
                          +
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="btn btn-danger ms-3"
                          onClick={() => handleQuantity(product, -1)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            <div class="modal-footer">
              <button
                className={`btn  w-100 ${
                  cart.length == 0 ? "btn-secondary pe-none" : "btn-danger"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Checkout <ArrowDropDown />
              </button>
              <div className="accordion w-100" id="accordionExample">
                <div className="accordion-item">
                  <h2 class="accordion-header" id="headingOne"></h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body d-flex align-items-center w-100 flex-wrap">
                      {cart.map((product) => {
                        return (
                          <div className="info-box w-50 border border-bottom p-1">
                            <div className="product-title my-2">
                              <span className="title fw-bold">
                                product's Name:{" "}
                              </span>
                              <span className="title">{product.title}</span>
                            </div>

                            <div className="product-title my-2">
                              <span className="title fw-bold">
                                Total Price:{" "}
                              </span>
                              <span className="title">
                                {product.price * product.quantity} $
                              </span>
                            </div>

                            <div className="product-quantity d-flex justify-content-between my-2 align-items-center ">
                              <span className="title me-3 fw-bold">
                                Quantity:{product.quantity}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                      <button
                        className={`btn my-2 mx-auto px-3 ${
                          cart.length == 0
                            ? "btn-secondary pe-none"
                            : "btn-success"
                        }`}
                      >
                        Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
