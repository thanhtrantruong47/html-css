import Footer from "./footer";
import Header from "./header";
import IMAGES from "./img";

function Product() {
   
    window.addEventListener("DOMContentLoaded", () => { const plus = document.querySelector(".plus"),
        minus = document.querySelector(".minus"),
        num = document.querySelector(".num")
        let a = 1
        plus.addEventListener("click", () => {
            a++;
            a = a < 10 ?  + a : a;
            num.innerText = a;
        });

        minus.addEventListener("click", () => {
            if (a > 1) {
            a--;
            a = a < 10 ?  + a : a;
            num.innerText = a;
            }
    })});
    return (
    <>
      <Header />
      <section className="container">
        <aside className="sidebar">
          <div className="sidebar__wrapper">
            <p>Home</p>
            {/* <p>"</p> */}
            <p>Shop</p>
            {/* <p>></p> */}
            <p>Men</p>
            {/* <p>></p> */}
            <p className="sidebar__item">T-Shirt</p>
          </div>
        </aside>
        <div className="detail">
          <div className="detail__img">
            <div className="detail__img-list">
              <div>
                <img className="detail__img-list-item img" src={IMAGES.stripedT} alt="" />
              </div>
              <div>
                <img className="detail__img-list-item img" src={IMAGES.stripedT} alt="" />
              </div>
              <div>
                <img className="detail__img-list-item img" src={IMAGES.stripedT} alt="" />
              </div>
            </div>
            <img className="img-detail" src={IMAGES.stripedT} alt="" />
          </div>
          <div className="detail__wrapper">
            <h1 className="detail__title title">ONE LIFE GRAPHIC T-SHIRT</h1>
            <div className="detail__evalute">
              <div className="product__evaluate evaluate-detail">
                <img
                  className="evaluate-detail__img"
                  src={IMAGES.star_full}
                  alt="star-full"
                />
                <img
                  className="evaluate-detail__img"
                  src={IMAGES.star_full}
                  alt="star-full"
                />
                <img
                  className="evaluate-detail__img"
                  src={IMAGES.star_full}
                  alt="star-full"
                />
                <img
                  className="evaluate-detail__img"
                  src={IMAGES.star_full}
                  alt="star-full"
                />
                <img
                  className="evaluate-detail__img--half"
                  src={IMAGES.star_half}
                  alt="star-full"
                />
              </div>
              <p className="product__feedback-score">
                4.5/<span className="product__feedback-score-max">5</span>
              </p>
            </div>
            <div className="detail__price price">
              <p className="price">&#36;240</p>
              <p className="price price--sell">&#36;260</p>
              <p className="price price--precent desc-small">-20%</p>
            </div>
            <p className="detail__desc desc">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <div className="detail__color">
              <p className="desc">Select Color</p>
              <form className="detail__color-group" action="">
                <input type="radio" id="radio01" name="radio" />
                <input type="radio" id="radio02" name="radio" />
                <input type="radio" id="radio02" name="radio" />
              </form>
            </div>
            <div className="detail__choose">
              <p className="desc">Choose Size</p>
              <div className="choose__list">
                <button className="detail__btn btn btn--secondary">
                  Small
                </button>
                <button className="detail__btn btn btn--secondary">
                  Media
                </button>
                <button className="detail__btn btn btn--secondary">
                  Large
                </button>
                <button className="detail__btn btn btn--secondary">
                  X-Large
                </button>
              </div>
            </div>
            <div className="detail__add">
              <div className="wrapper">
                <span className="icon-span"></span>
                <span className="num">1</span>
                <span className="plus icon-plus"></span>
              </div>
              <button className="detail__number-num btn btn--primary">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="detail__action">
            <button className="detail__item desc">Product Details</button>
            <a className="desc detail__item detail__item--center">
              Rating & Reviews
            </a>
            <a className="detail__item detail__item--right desc"> FAQs </a>
          </div>
        </div>
        <div className="detail-option">
          <div className="option-info">
            <p>All Review</p>
            <p className="option-info__num desc">(451)</p>
          </div>
          <div className="option-choose">
            <img src="./assets/images/details/Frame 19.svg" alt="" />
            <select className="option-choose__select btn" name="" id="">
              <option value="">later</option>
              <option value="">new</option>
            </select>
            <button className="option-choose__btn btn">Write a Review</button>
          </div>
        </div>
        <div className="detail-info">
          <div className="comment">
            <div className="comment__feedback evaluate-comment">
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
            </div>
            <div className="comment__name">
              <p>Sarah M.</p>
              <img
                className="comment__img"
                src={IMAGES.blue_check}
                alt="blue-check-mark"
              />
            </div>
            <p className="comment__desc desc">
              Im blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece Ive
              bought has exceeded my expectations.”
            </p>
            <p className="comment__date desc">Posted on August 14, 2023</p>
          </div>
          <div className="comment">
            <div className="comment__feedback evaluate-comment">
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
            </div>
            <div className="comment__name">
              <p>Sarah M.</p>
              <img
                className="comment__img"
                src={IMAGES.blue_check}
                alt="blue-check-mark"
              />
            </div>
            <p className="comment__desc desc">
              Im blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece Ive
              bought has exceeded my expectations.
            </p>
            <p className="comment__date desc">Posted on August 14, 2023</p>
          </div>
          <div className="comment">
            <div className="comment__feedback evaluate-comment">
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
            </div>
            <div className="comment__name">
              <p>Sarah M.</p>
              <img
                className="comment__img"
                src={IMAGES.blue_check}
                alt="blue-check-mark"
              />
            </div>
            <p className="comment__desc desc">
              Im blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece Ive
              bought has exceeded my expectations.
            </p>
            <p className="comment__date desc">Posted on August 14, 2023</p>
          </div>
          <div className="comment">
            <div className="comment__feedback evaluate-comment">
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
            </div>
            <div className="comment__name">
              <p>Sarah M.</p>
              <img
                className="comment__img"
                src={IMAGES.blue_check}
                alt="blue-check-mark"
              />
            </div>
            <p className="comment__desc desc">
              Im blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece Ive
              bought has exceeded my expectations.”
            </p>
            <p className="comment__date desc">Posted on August 14, 2023</p>
          </div>
          <div className="comment">
            <div className="comment__feedback evaluate-comment">
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
            </div>
            <div className="comment__name">
              <p>Sarah M.</p>
              <img
                className="comment__img"
                src={IMAGES.blue_check}
                alt="blue-check-mark"
              />
            </div>
            <p className="comment__desc desc">
              Im blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece Ive
              bought has exceeded my expectations.
            </p>
            <p className="comment__date desc">Posted on August 14, 2023</p>
          </div>
          <div className="comment">
            <div className="comment__feedback evaluate-comment">
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
              <img
                className="evaluate-comment__img"
                src={IMAGES.star_full}
                alt="star-full"
              />
            </div>
            <div className="comment__name">
              <p>Sarah M.</p>
              <img
                className="comment__img"
                src={IMAGES.blue_check}
                alt="blue-check-mark"
              />
            </div>
            <p className="comment__desc desc">
              Im blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece Ive
              bought has exceeded my expectations.”
            </p>
            <p className="comment__date desc">Posted on August 14, 2023</p>
          </div>
        </div>
      </section>
      <div className="detail__btn-product">
        <button className="detail__btn detail__btn--large btn btn--secondary">
          Load More Reviews
        </button>
      </div>

      <section className="top-selling">
        <h2 className="browse__title title title--primary">
          YOU MIGHT ALSO LIKE
        </h2>
        <div className="detail__products">
          <div className="top-selling__product product">
            <img
              className="product__img"
              src={IMAGES.stripedT}
              alt="veritical"
            />
            <p className="product__name">Vertical Striped Shirt</p>
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
                  className="evaluate-product__img"
                  src={IMAGES.star_full}
                  alt="star-full"
                />
              </div>
              <p className="product__feedback-score">
                5.0/<span className="product__feedback-score-max">5</span>
              </p>
            </div>
            <div className="product__price">
              <p className="price">&#36;212</p>
              <p className="price price--sell">&#36;232</p>
              <p className="price price--precent">-20%</p>
            </div>
          </div>
          <div className="top-selling__product product">
            <img className="product__img" src={IMAGES.stripedT} alt="courage" />
            <p className="product__name">Courage Graphic T-Shirt</p>
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
              </div>
              <p className="product__feedback-score">
                4.0/<span className="product__feedback-score-max">5</span>
              </p>
            </div>
            <div className="product__price price">
              <p>&#36;145</p>
            </div>
          </div>
          <div className="top-selling__product product">
            <img
              className="product__img"
              src={IMAGES.stripedT}
              alt="loose-fit"
            />
            <p className="product__name">Loose Fit Bermuda Shorts</p>
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
              </div>
              <p className="product__feedback-score">
                3.0/<span className="product__feedback-score-max">5</span>
              </p>
            </div>
            <div className="product__price price">
              <p>&#36;80</p>
            </div>
          </div>
          <div className="top-selling__product product">
            <img
              className="product__img"
              src={IMAGES.stripedT}
              alt="faded-skinny"
            />
            <p className="product__name">Faded Skinny Jeans</p>
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
      </section>
      <Footer />
    </>
  );
}

export default Product
