import React from "react";
import "./Homepage.css";
import * as mdb from "mdb-ui-kit"; // lib
window.mdb = mdb;

const Homepage = () => {
  return (
    <div className="homepage-main-body">
      <div className="homepage-carousel-sec">
        <>
          {/* Carousel wrapper */}
          <div
            id="carouselBasicExample"
            className="carousel slide carousel-fade"
            data-mdb-ride="carousel"
            data-mdb-carousel-init=""
          >
            {/* Inner */}
            <div className="carousel-inner">
              {/* Single item */}
              <div className="carousel-item active">
                <img
                  src="/carousel-1.png"
                  className="d-block w-100"
                  alt="Sunset Over the City"
                />
              </div>
              {/* Single item */}
              <div className="carousel-item">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                  className="d-block w-100"
                  alt="Canyon at Nigh"
                />
              </div>
              {/* Single item */}
              <div className="carousel-item">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
                  className="d-block w-100"
                  alt="Cliff Above a Stormy Sea"
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            </div>
            {/* Inner */}
            {/* Controls */}
          </div>
          {/* Carousel wrapper */}
        </>
      </div>

      {/* //Editor's pic */}
      <div className="homepage-editorspic-sec">
        <div className="homepage-editorspic-content">
          <div className="homepage-editorspic-title-sec">
            EDITOR’S PICK
            <br />
            Problems trying to resolve the conflict between
          </div>
          <div className="homepage-editorspic-image-sec">
            <div className="homepage-editorspic-subimage1">
              <img
                src="/editors-pic-1.png"
                alt=""
                style={{
                  maxWidth: "70%",
                }}
              />
              <img
                src="/editors-pic-2.png"
                alt=""
                style={{
                  maxWidth: "33%",
                }}
              />
            </div>
            <div className="homepage-editorspic-subimage2">
              <img
                src="/editors-pic-3-1.png"
                alt=""
                style={{
                  maxWidth: "65%",
                }}
              />
              <img
                src="/editors-pic-3-2.png"
                alt=""
                style={{
                  maxWidth: "65%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* //Best Sellers Products */}

      <div className="homepage-best-sellersproduct-sec">
        <div className="homepage-best-sellersproduct-content">
          <div className="homepage-best-sellersproduct-title-sec">
            <div
              style={{
                fontSize: ".8rem",
              }}
            >
              {" "}
              Featured Products
            </div>

            <div
              style={{
                fontSize: "1rem",
              }}
            >
              {" "}
              BESTSELLER PRODUCTS
            </div>
            <div
              style={{
                fontSize: ".8rem",
              }}
            >
              {" "}
              Problems trying to resolve the conflict between
            </div>
          </div>
          <div className="homepage-best-sellersproduct-images-sec">
            <img
              src="Product card1.png"
              alt=""
              className="homepage-best-sellerproduct-img"
            />
            <img
              src="Product card2.png"
              alt=""
              className="homepage-best-sellerproduct-img"
            />
            <img
              src="Product card3.png"
              alt=""
              className="homepage-best-sellerproduct-img"
            />
            <img
              src="Product card4.png"
              alt=""
              className="homepage-best-sellerproduct-img"
            />
          </div>
          <div className="homepage-best-sellersproduct-images-sec">
            <img
              src="Product card5.png"
              alt=""
              className="homepage-best-sellerproduct-img"
            />
            <img
              src="Product card6.png"
              alt=""
              className="homepage-best-sellerproduct-img"
            />
            <img
              src="Product card7.png"
              alt=""
              className="homepage-best-sellerproduct-img"
            />
            <img
              src="Product card8.png"
              alt=""
              className="homepage-best-sellerproduct-img"
            />
          </div>
        </div>
      </div>

      {/* //Carousel 2 */}

      <div className="homepage-carousel-2-sec">
        <>
          {/* Carousel wrapper */}
          <div
            id="carouselBasicExample"
            className="carousel slide carousel-fade"
            data-mdb-ride="carousel"
            data-mdb-carousel-init=""
          >
            {/* Inner */}
            <div className="carousel-inner">
              {/* Single item */}
              <div className="carousel-item active">
                <img
                  src="/carousel 2.png"
                  className="d-block w-100"
                  alt="Sunset Over the City"
                />
              </div>
              {/* Single item */}
              <div className="carousel-item">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                  className="d-block w-100"
                  alt="Canyon at Nigh"
                />
              </div>
              {/* Single item */}
              <div className="carousel-item">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
                  className="d-block w-100"
                  alt="Cliff Above a Stormy Sea"
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            </div>
            {/* Inner */}
            {/* Controls */}
          </div>
          {/* Carousel wrapper */}
        </>
      </div>

      {/* ///Part of the neural universe */}

      <div className="homepage-universal-part-sec">
        <img
          src="universal-part.png"
          alt=""
          style={{
            maxHeight: "450px",
            maxWidth: "80%",
          }}
        />
        <img
          src="universal-part2.png"
          alt=""
          style={{
            maxHeight: "450px",
            maxWidth: "80%",
          }}
        />
      </div>

      {/* ////////Featured Post */}

      <div className="homepage-featured-post-sec">
        <div className="homepage-featured-post-title-sec">
          <div>Practice Advice</div>
          <h2>Featured Posts</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="homepage-featured-post-image-sec">
          <img
            src="Content card1.png"
            alt=""
            className="homepage-featured-post-img"
          />
          <img
            src="Content card2.png"
            alt=""
            className="homepage-featured-post-img"
          />
          <img
            src="Content card3.png"
            alt=""
            className="homepage-featured-post-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
