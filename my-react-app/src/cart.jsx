import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import IMAGES from "./img";

function Cart() {
  const [count, setCount] = useState(1);
  const increment = () => {
  setCount((prevCount) => prevCount + 1);
};
const decrement = () => {
  if (count > 0) {
    setCount((prevCount) => prevCount - 1);
  }
}
  return (
    <>
    <Header/>
      <div className="container">
        <aside className="sidebar">
          <div className="sidebar__wrapper">
            <p>Home</p>
            {/* <p>></p> */}
            <p>Shop</p>
            {/* <p>></p> */}
            <p>Men</p>
            {/* <p>></p> */}
            <p className="sidebar__item">T-Shirt</p>
          </div>
        </aside>
        <h2 className="cart__title title">YOUR CART</h2>
        <div className="cart">
          <div className="your-cart">
            <div className="arrival__product product-cart">
              <img
                className=" cart__img"
                src={IMAGES.tapede}
                alt="tapede-tails"
              />
              <div className="cart__detail">
                <div className="cart__info">
                  <div className="cart__name">
                    <p className="product__name">T-Shirt with Tape Details</p>
                    <div className="cart__info-inline">
                      <p className="cart__info-desc">Size:</p>
                      <p className="desc cart__info-desc">Large</p>
                    </div>
                  </div>
                  <a className="icon-delete"></a>
                </div>
                <div className="cart__price">
                  <div className="product__price price">
                    <p>&#36;120</p>
                  </div>
                  <div className="wrapper-cart">
                    {/* <span className="minus icon-span-cart"></span>
                    <span className="num">1</span>
                    <span className="plus icon-plus-cart"></span> */}
                    <button onClick={decrement} className=" btn icon-span-cart"></button>
                    <div className="num">{count}</div>
                    <button className="btn icon-plus-cart" onClick={increment}></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="arrival__product product-cart product-cart--center">
              <img
                className="cart__img"
                src={IMAGES.tapede}
                alt="tapede-tails"
              />
              <div className="cart__detail">
                <div className="cart__info">
                  <div className="cart__name">
                    <p className="product__name">T-Shirt with Tape Details</p>
                    <div className="cart__info-inline">
                      <p className="cart__info-desc">Size:</p>
                      <p className="desc cart__info-desc">Large</p>
                    </div>
                    <div className="cart__info-inline">
                      <p className="cart__info-desc">Color:</p>
                      <p className="desc cart__info-desc">While</p>
                    </div>
                  </div>
                  <a className="icon-delete"></a>
                </div>
                <div className="cart__price">
                  <div className="product__price price">
                    <p>&#36;120</p>
                  </div>
                  <div className="wrapper-cart">
                  <button onClick={decrement} className=" btn icon-span-cart"></button>
                    <div className="num">{count}</div>
                    <button className="btn icon-plus-cart" onClick={increment}></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="arrival__product product-cart">
              <img
                className="cart__img"
                src={IMAGES.tapede}
                alt="tapede-tails"
              />
              <div className="cart__detail">
                <div className="cart__info">
                  <div className="cart__name">
                    <p className="product__name">T-Shirt with Tape Details</p>
                    <div className="cart__info-inline">
                      <p className="cart__info-desc">Size:</p>
                      <p className="desc cart__info-desc">Large</p>
                    </div>
                  </div>
                  <a className="icon-delete"></a>
                </div>
                <div className="cart__price">
                  <div className="product__price price">
                    <p>&#36;120</p>
                  </div>
                  <div className="wrapper-cart">
                  <button onClick={decrement} className=" btn icon-span-cart"></button>
                    <div className="num">{count}</div>
                    <button className="btn icon-plus-cart" onClick={increment}></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout">
            <h3 className="checkout__title product__price price">
              Order Summary
            </h3>
            <table className="checkout__tbl">
              <tr>
                <td className="desc checkout__tbl-item">Subtotal</td>
                <td className="checkout__tbl-right ">$565</td>
              </tr>
              <tr>
                <td className="desc checkout__tbl-item">Discount (-20%)</td>
                <td className="checkout__tbl-right  price--cart">-$113</td>
              </tr>
              <tr>
                <td className="desc checkout__tbl-item">Delivery Fee</td>
                <td className="checkout__tbl-right">$15</td>
              </tr>
              <tr className="checkout__tbl-bot">
                <td className="checkout__tbl-item">Total</td>
                <td className="checkout__tbl-right checkout__tbl-price">
                  $467
                </td>
              </tr>
            </table>
            <form className="checkout__box" action="">
              <input
                className="checkout__promo"
                type="text"
                maxLength="20"
                placeholder="Add promo code"
              />
              <button className="btn btn--primary checkout__btn-apply">
                Apply
              </button>
            </form>
            <button className="btn btn--primary checkout__btn-checkout">
              Go To Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Cart;
