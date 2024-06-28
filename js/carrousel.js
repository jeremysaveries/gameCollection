import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src="/public/img/jackette/nouveauté/ST.jpg" alt="Image 1" />
          <h3>Title 1</h3>
          <p>Description for image 1.</p>
        </div>
        <div className="slide-item">
          <img src="/public/img/jackette/nouveauté/ST.jpg" alt="Image 2" />
          <h3>Title 2</h3>
          <p>Description for image 2.</p>
        </div>
        <div className="slide-item">
          <img src="/public/img/jackette/nouveauté/ST.jpg" alt="Image 3" />
          <h3>Title 3</h3>
          <p>Description for image 3.</p>
        </div>
        <div className="slide-item">
          <img src="/public/img/jackette/nouveauté/ST.jpg" alt="Image 4" />
          <h3>Title 4</h3>
          <p>Description for image 4.</p>
        </div>
        <div className="slide-item">
          <img src="/path/to/image5.jpg" alt="Image 5" />
          <h3>Title 5</h3>
          <p>Description for image 5.</p>
        </div>
        <div className="slide-item">
          <img src="/public/img/jackette/nouveauté/ST.jpg" alt="Image 6" />
          <h3>Title 6</h3>
          <p>Description for image 6.</p>
        </div>
        <div className="slide-item">
          <img src="/public/img/jackette/nouveauté/ST.jpg" alt="Image 7" />
          <h3>Title 7</h3>
          <p>Description for image 7.</p>
        </div>
        <div className="slide-item">
          <img src="/public/img/jackette/nouveauté/ST.jpg" alt="Image 8" />
          <h3>Title 8</h3>
          <p>Description for image 8.</p>
        </div>
        <div className="slide-item">
          <img src="/public/img/jackette/nouveauté/ST.jpg" alt="Image 9" />
          <h3>Title 9</h3>
          <p>Description for image 9.</p>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
