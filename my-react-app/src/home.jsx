import "./styles/index.scss";
import "./img";
import IMAGES from "./img";
import Header from "./header";
import Footer from "./footer";
import "./index"

function Home() {
  return (
    <>
    <Header/>
      <section className="banner">
        <div className="banner__wrapper">
          <div className="banner__content">
            <h2 className="banner__title title">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p className="banner__desc desc">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="banner__btn btn btn--primary">Shop Now</button>
            <ul className="info">
              <li className="info__box">
                <div className="info__item">
                  <p className="info__head">200+</p>
                  <p className="info__desc desc">International Brands</p>
                </div>
              </li>
              <li className="info__box info__box--line">
                <div className="info__item">
                  <p className="info__head">2,000+</p>
                  <p className="info__desc desc">High-Quality Products</p>
                </div>
              </li>
              <li className="info__box">
                <div className="info__item">
                  <p className="info__head">30,000+</p>
                  <p className="info__desc desc">Happy Customers</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="banner__img">
            <img className="banner__img-left" src={IMAGES.icon_star_banner}/>
            <img className="banner__img-right" src={IMAGES.icon_star_banner}/>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="brand__wrapper">
          <img className="brand__img" src={IMAGES.versace} alt="first image" />
          <img className="brand__img" src={IMAGES.zara} alt="first image" />
          <img className="brand__img" src={IMAGES.gucci} alt="first image" />
          <img className="brand__img" src={IMAGES.prada} alt="first image" />
          <img className="brand__img" src={IMAGES.calvin} alt="first image" />
        </div>
        <div className="brand__wrapper-xxl container">
          <img
            className="brand__img"
            src={IMAGES.versaceDesktop}
            alt="first image"
          />
          <img
            className="brand__img"
            src={IMAGES.zaraDesktop}
            alt="first image"
          />
          <img
            className="brand__img"
            src={IMAGES.gucciDesktop}
            alt="first image"
          />
          <img
            className="brand__img"
            src={IMAGES.pradaDesktop}
            alt="first image"
          />
          <img
            className="brand__img"
            src={IMAGES.calvinDesktop}
            alt="first image"
          />
        </div>
      </section>
      <section className="arrival">
        <h2 className="arrival__title title title--primary">new arrivals</h2>
        <div className="arrival__products">
          <div className="arrival__product product">
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
          <div className="arrival__product product">
            <img
              className="product__img"
              src={IMAGES.fitJeans}
              alt="fit-jeans"
            />
            <p className="product__name">Skinny Fit Jeans</p>
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
                  className="evaluate-product__img evaluate-product__img--half"
                  src={IMAGES.star_half}
                  alt="star-full"
                />
              </div>
              <p className="product__feedback-score">
                3.5/<span className="product__feedback-score-max">5</span>
              </p>
            </div>
            <div className="product__price">
              <p className="price">&#36;240</p>
              <p className="price price--sell">&#36;260</p>
              <p className="price price--precent">-20%</p>
            </div>
          </div>
          <div className="arrival__product product">
            <img
              className="product__img"
              src={IMAGES.checkeredShirt}
              alt="striped-t-shirt"
            />
            <p className="product__name">Checkered Shirt</p>
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
              <p>&#36;180</p>
            </div>
          </div>
          <div className="arrival__product product">
            <img
              className="product__img"
              src={IMAGES.stripedT}
              alt="tapede-tails"
            />
            <p className="product__name">Sleeve Striped T-Shirt</p>
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
            <div className="product__price">
              <p className="price">&#36;130</p>
              <p className="price price--sell">&#36;160</p>
              <p className="price price--precent">-30%</p>
            </div>
          </div>
        </div>
        <div className="arrival__box-btn">
          <button className="arrival__btn btn btn--secondary">View All</button>
        </div>
      </section>
      <section className="top-selling">
        <h2 className="arrival__title title title--primary">top selling</h2>
        <div className="arrival__products">
          <div className="arrival__product product">
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
          <div className="arrival__product product">
            <img
              className="product__img"
              src={IMAGES.fitJeans}
              alt="fit-jeans"
            />
            <p className="product__name">Skinny Fit Jeans</p>
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
                  className="evaluate-product__img evaluate-product__img--half"
                  src={IMAGES.star_half}
                  alt="star-full"
                />
              </div>
              <p className="product__feedback-score">
                3.5/<span className="product__feedback-score-max">5</span>
              </p>
            </div>
            <div className="product__price">
              <p className="price">&#36;240</p>
              <p className="price price--sell">&#36;260</p>
              <p className="price price--precent">-20%</p>
            </div>
          </div>
          <div className="arrival__product product">
            <img
              className="product__img"
              src={IMAGES.checkeredShirt}
              alt="striped-t-shirt"
            />
            <p className="product__name">Checkered Shirt</p>
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
              <p>&#36;180</p>
            </div>
          </div>
          <div className="arrival__product product">
            <img
              className="product__img"
              src={IMAGES.stripedT}
              alt="tapede-tails"
            />
            <p className="product__name">Sleeve Striped T-Shirt</p>
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
            <div className="product__price">
              <p className="price">&#36;130</p>
              <p className="price price--sell">&#36;160</p>
              <p className="price price--precent">-30%</p>
            </div>
          </div>
        </div>
        <div className="top-selling__box-btn">
          <button className="arrival__btn btn btn--secondary">View All</button>
        </div>
      </section>
      <div className="container">
        <section className="browse">
          <h2 className="browse__title title title--primary">
            BROWSE BY dress STYLE
          </h2>
          <div className="browse__wrapper">
            <img className="browse__img" src={IMAGES.casual} alt="casual" />
            <img className="browse__img" src={IMAGES.formal} alt="formal" />
            <img className="browse__img" src={IMAGES.party} alt="gym" />
            <img className="browse__img" src={IMAGES.gym} alt="party" />
          </div>
          <div className="browse__wrapper-xxl">
            <img
              className="browse__img"
              src={IMAGES.casualDesktop}
              alt="casual-desktop"
            />
            <img
              className="browse__img"
              src={IMAGES.formalDesktop}
              alt="formal-desktop"
            />
            <img
              className="browse__img"
              src={IMAGES.partyDesktop}
              alt="gym-desktop"
            />
            <img
              className="browse__img"
              src={IMAGES.gymDesktop}
              alt="party-desktop"
            />
          </div>
        </section>

        <section className="feedback">
          <div className="feedback__heading">
            <h2 className="feedback__title title title--primary">
              OUR HAPPY CUSTOMERS
            </h2>
            <div className="feedback__action">
              <a
                className="feedback__btn icon-next"
                aria-label="icon-next"
                href="javascript:void(0)"
              ></a>
              <a
                className="feedback__btn icon-prev"
                aria-label="icon-prev"
                href="javascript:void(0)"
              ></a>
            </div>
          </div>
          <div className="feedback__list">
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
                from Shop.co. From casual wear to elegant dresses, every piece
                Ive bought has exceeded my expectations.”
              </p>
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
                <img
                  className="evaluate-comment__img"
                  src={IMAGES.star_full}
                  alt="star-full"
                />
              </div>
              <div className="comment__name">
                Alex K.
                <img
                  className="comment__img"
                  src={IMAGES.blue_check}
                  alt="blue-check-mark"
                />
              </div>
              <p className="comment__desc desc">
                Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
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
                James L.
                <img
                  className="comment__img"
                  src={IMAGES.blue_check}
                  alt="blue-check-mark"
                />
              </div>
              <p className="comment__desc desc">
                As someone whos always on the lookout for unique fashion pieces,
                Im thrilled to have stumbled upon Shop.co. The selection of
                clothes is not only diverse but also on-point with the latest
                trends.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
