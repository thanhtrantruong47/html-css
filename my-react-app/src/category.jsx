import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import IMAGES from "./img";

function Category() {
  const [value, setValue] = useState(50);
  const dola = ' $';
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="container">
        <aside className="sidebar">
          <div className="sidebar__wrapper">
            <p>Home</p>
            <p>{'>'}</p>
            <p>Shop</p>
            <p>{'>'}</p>
            <p>Men</p>
            <p>{'>'}</p>
            <p className="sidebar__item">T-Shirt</p>
          </div>
        </aside>
        <div className="ctg">
          <article id="mySidenav" className="sidebar-ctg">
            <div className="sidebar-ctg__fill">
              <p className="">Filters</p>
              <a className="icon-filter" href=""></a>
              <a
                href="javascript:void(0)"
                className="icon-close sidebar-ctg-a"
                onClick={function () {
                  document.getElementById("mySidenav").style.width = "0";
                  document.getElementById("mySidenav").style.padding = "0";
                }}
              ></a>
            </div>
            <div className="sidebar-ctg__list">
              <div className="sidebar-ctg__list-item">
                <p className="desc">T-Shirts</p>
                <a className="icon-right" href=""></a>
              </div>
              <div className="sidebar-ctg__list-item">
                <p className="desc">Shorts</p>
                <a className="icon-right" href=""></a>
              </div>
              <div className="sidebar-ctg__list-item">
                <p className="desc">Shirts</p>
                <a className="icon-right" href=""></a>
              </div>
              <div className="sidebar-ctg__list-item">
                <p className="desc">Hoodie</p>
                <a className="icon-right" href=""></a>
              </div>
              <div className="sidebar-ctg__list-item">
                <p className="desc">Jeans</p>
                <a className="icon-right" href=""></a>
              </div>
            </div>
            <div className="sidebar-ctg__price">
              <div className="sidebar-ctg__price-head sidebar-ctg__list-item">
                <p className="sidebar-ctg__price-title">Price</p>
                <a className="icon-up" href=""></a>
              </div>
              <div>
             
                <input
                  type="range"
                  min="0"
                  max="999"
                  value={value}
                  onChange={handleChange}
                />
                <p>{value+dola}</p>
              </div>
            </div>
            <div className="sidebar-ctg__color">
              <p className="sidebar-ctg__color-title">Color</p>
              <form className="sidebar-ctg__color-group" action="">
                <input type="radio" id="radio01" name="radio" />
                <input type="radio" id="radio02" name="radio" />
                <input type="radio" id="radio02" name="radio" />
                <input type="radio" id="radio01" name="radio" />
                <input type="radio" id="radio02" name="radio" />
                <input type="radio" id="radio02" name="radio" />
                <input type="radio" id="radio01" name="radio" />
                <input type="radio" id="radio02" name="radio" />
                <input type="radio" id="radio02" name="radio" />
              </form>
            </div>
            <div className="sidebar-ctg__size">
              <div className="sidebar-ctg__price-head sidebar-ctg__list-item">
                <p className="sidebar-ctg__price-title">Size</p>
                <a className="icon-up" href=""></a>
              </div>
              <div className="sidebar-ctg__size-list">
                <button className="detail__btn btn btn--secondary">
                  XX-Small
                </button>
                <button className="detail__btn btn btn--secondary">
                  X-Small
                </button>
                <button className="detail__btn btn btn--secondary">
                  Small
                </button>
                <button className="detail__btn btn btn--secondary">
                  Medium
                </button>
                <button className="detail__btn btn btn--secondary">
                  Large
                </button>
                <button className="detail__btn btn btn--secondary">
                  X-Large
                </button>
                <button className="detail__btn btn btn--secondary">
                  XX-Large
                </button>
                <button className="detail__btn btn btn--secondary">
                  3X-Large
                </button>
                <button className="detail__btn btn btn--secondary">
                  4X-Large
                </button>
              </div>
            </div>
            <div className="sidebar-ctg__dress">
              <div className="sidebar-ctg__price-head sidebar-ctg__list-item">
                <p className="sidebar-ctg__price-title">Dress style</p>
                <a className="icon-up" href=""></a>
              </div>
              <div className="sidebar-ctg__list sidebar-ctg__dress-list">
                <div className="sidebar-ctg__list-item">
                  <p className="desc">Casual</p>
                  <a className="icon-right" href=""></a>
                </div>
                <div className="sidebar-ctg__list-item">
                  <p className="desc">Formal</p>
                  <a className="icon-right" href=""></a>
                </div>
                <div className="sidebar-ctg__list-item">
                  <p className="desc">Party</p>
                  <a className="icon-right" href=""></a>
                </div>
                <div className="sidebar-ctg__list-item">
                  <p className="desc">Gym</p>
                  <a className="icon-right" href=""></a>
                </div>
              </div>
              <button className="detail__number-num btn btn--primary">
                Apply Filter
              </button>
            </div>
          </article>
          <section className="arrival-ctg">
            <div className="ctg__head">
              <h2 className="ctg__title">Casual</h2>
              <div className="ctg__head-desc">
                <p className="ctg__desc desc">Showing 1-10 of 100 Products</p>
                <div className="ctg__select">
                  <p className="ctg__desc desc">Sort by: </p>
                  <select className="btn ctg__select-list" name="" id="">
                    <option value="">Most Popular</option>
                    <option value="">Most Popular</option>
                    <option value="">Most Popular</option>
                    <option value="">Most Popular</option>
                  </select>
                </div>
              </div>
              <p
                className="icon-ctg"
                onClick={function () {
                  document.getElementById("mySidenav").style.width = "390px";
                  document.getElementById("mySidenav").style.padding =
                    "20px 18px 25px";
                  document.getElementById("mySidenav").style.height = "1220px";
                }}
              ></p>
            </div>
            <div className="ctg__product">
              <div className="arrival__product  product-ctg">
                <img
                  className="product__img"
                  src={IMAGES.tapede}
                  alt="tapede-tails"
                />
                <p className="product__name">T-Shirt with Tape Details</p>
                <div className="product__feedback-wrapper">
                  <div className="product__evaluate evaluate-product">
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img evaluate-product__img--half"
                      src={IMAGES.star_half}
                      alt="star-full"
                    />
                  </div>
                  <p className="product__feedback-score">
                    4.5/<span className="product__feedback-score-max">5</span>
                  </p>
                </div>
                <div className="product__price price">
                  <p>&#36;120</p>
                </div>
              </div>
              <div className="arrival__product  product-ctg">
                <img
                  className="product__img"
                  src={IMAGES.tapede}
                  alt="tapede-tails"
                />
                <p className="product__name">T-Shirt with Tape Details</p>
                <div className="product__feedback-wrapper">
                  <div className="product__evaluate evaluate-product">
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img evaluate-product__img--half"
                      src={IMAGES.star_half}
                      alt="star-full"
                    />
                  </div>
                  <p className="product__feedback-score">
                    4.5/<span className="product__feedback-score-max">5</span>
                  </p>
                </div>
                <div className="product__price price">
                  <p>&#36;120</p>
                </div>
              </div>
              <div className="arrival__product  product-ctg">
                <img
                  className="product__img"
                  src={IMAGES.tapede}
                  alt="tapede-tails"
                />
                <p className="product__name">T-Shirt with Tape Details</p>
                <div className="product__feedback-wrapper">
                  <div className="product__evaluate evaluate-product">
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img evaluate-product__img--half"
                      src={IMAGES.star_half}
                      alt="star-full"
                    />
                  </div>
                  <p className="product__feedback-score">
                    4.5/<span className="product__feedback-score-max">5</span>
                  </p>
                </div>
                <div className="product__price price">
                  <p>&#36;120</p>
                </div>
              </div>
              <div className="arrival__product  product-ctg">
                <img
                  className="product__img"
                  src={IMAGES.tapede}
                  alt="tapede-tails"
                />
                <p className="product__name">T-Shirt with Tape Details</p>
                <div className="product__feedback-wrapper">
                  <div className="product__evaluate evaluate-product">
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img evaluate-product__img--half"
                      src={IMAGES.star_half}
                      alt="star-full"
                    />
                  </div>
                  <p className="product__feedback-score">
                    4.5/<span className="product__feedback-score-max">5</span>
                  </p>
                </div>
                <div className="product__price price">
                  <p>&#36;120</p>
                </div>
              </div>
              <div className="arrival__product  product-ctg">
                <img
                  className="product__img"
                  src={IMAGES.tapede}
                  alt="tapede-tails"
                />
                <p className="product__name">T-Shirt with Tape Details</p>
                <div className="product__feedback-wrapper">
                  <div className="product__evaluate evaluate-product">
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img evaluate-product__img--half"
                      src={IMAGES.star_half}
                      alt="star-full"
                    />
                  </div>
                  <p className="product__feedback-score">
                    4.5/<span className="product__feedback-score-max">5</span>
                  </p>
                </div>
                <div className="product__price price">
                  <p>&#36;120</p>
                </div>
              </div>
              <div className="arrival__product  product-ctg">
                <img
                  className="product__img"
                  src={IMAGES.tapede}
                  alt="tapede-tails"
                />
                <p className="product__name">T-Shirt with Tape Details</p>
                <div className="product__feedback-wrapper">
                  <div className="product__evaluate evaluate-product">
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img evaluate-product__img--half"
                      src={IMAGES.star_half}
                      alt="star-full"
                    />
                  </div>
                  <p className="product__feedback-score">
                    4.5/<span className="product__feedback-score-max">5</span>
                  </p>
                </div>
                <div className="product__price price">
                  <p>&#36;120</p>
                </div>
              </div>
              <div className="arrival__product  product-ctg">
                <img
                  className="product__img"
                  src={IMAGES.tapede}
                  alt="tapede-tails"
                />
                <p className="product__name">T-Shirt with Tape Details</p>
                <div className="product__feedback-wrapper">
                  <div className="product__evaluate evaluate-product">
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img evaluate-product__img--half"
                      src={IMAGES.star_half}
                      alt="star-full"
                    />
                  </div>
                  <p className="product__feedback-score">
                    4.5/<span className="product__feedback-score-max">5</span>
                  </p>
                </div>
                <div className="product__price price">
                  <p>&#36;120</p>
                </div>
              </div>
              <div className="arrival__product  product-ctg">
                <img
                  className="product__img"
                  src={IMAGES.tapede}
                  alt="tapede-tails"
                />
                <p className="product__name">T-Shirt with Tape Details</p>
                <div className="product__feedback-wrapper">
                  <div className="product__evaluate evaluate-product">
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img evaluate-product__img--half"
                      src={IMAGES.star_half}
                      alt="star-full"
                    />
                  </div>
                  <p className="product__feedback-score">
                    4.5/<span className="product__feedback-score-max">5</span>
                  </p>
                </div>
                <div className="product__price price">
                  <p>&#36;120</p>
                </div>
              </div>
              <div className="arrival__product  product-ctg">
                <img
                  className="product__img"
                  src={IMAGES.tapede}
                  alt="tapede-tails"
                />
                <p className="product__name">T-Shirt with Tape Details</p>
                <div className="product__feedback-wrapper">
                  <div className="product__evaluate evaluate-product">
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img"
                      src={IMAGES.star_full}
                      alt="star-full"
                    />
                    <img
                      className="evaluate-product__img evaluate-product__img--half"
                      src={IMAGES.star_half}
                      alt="star-full"
                    />
                  </div>
                  <p className="product__feedback-score">
                    4.5/<span className="product__feedback-score-max">5</span>
                  </p>
                </div>
                <div className="product__price price">
                  <p>&#36;120</p>
                </div>
              </div>
            </div>
            <div className="ctg__control">
              <button className="ctg__btn">
                <a className="icon-ctg-next" href=""></a>
                Previous
              </button>
              <div className="list-page">
                <button className="list-page__btn">1</button>
                <button className="list-page__btn">2</button>
                <button className="list-page__btn">3</button>
                <button className="list-page__btn">4</button>
                <button className="list-page__btn">5</button>
              </div>
              <button className="ctg__btn">
                Next
                <a className="icon-ctg-prev" href=""></a>
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Category;
