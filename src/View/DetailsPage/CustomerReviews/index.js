import React from "react";
import styles from "./styles.module.css";
import { Rating } from "react-simple-star-rating";
import BTN from "../../../components/BTN";

const CustomerReviews = ({
  Comment = "Millions of Americans turn to Lasik Surgery when their vision is less than perfect and they’re tired of being tied down to wearing glasses or contacts. What part of the eye is it that may be causing all your vision trouble? Your cornea! When the shape of your cornea is irregular, the image on your retina is blurry and out-of-focus. The cornea is a part of your eye that works to focus light and projects an image on the retina. This focusing of light is called refraction. The 3 main types of refractive errors are myopia (nearsightedness), hyperopia (farsightedness) and astigmatism. ",
  Title,
  RatingValue = 4,
  Name = "Ahmad AL - Qerem",
}) => {
  return (
    <div className={styles.MainWrapper}>
      <h1>{Title}</h1>
      <div className={styles.ReviewWrapper}>
        <div className={styles.TopWrapper}>
          <div>
            <Rating
              fillColor={"#FF6008"}
              allowFraction={true}
              initialValue={RatingValue}
              readonly={true}
            />
            <span>{RatingValue} of 5</span>
          </div>
          <div className={styles.TopRightWrapper}>
            <span>Share your thoughts with other customers</span>
            <BTN Text="Write a review" />
          </div>
        </div>
        <div className={styles.BottomWrapper}>
          <h4>Top Customers Reviews</h4>
          <Rating
            fillColor={"#FF6008"}
            allowFraction={true}
            initialValue={4}
            readonly={true}
          />
          <h5>By {Name}</h5>
          <p>{Comment}</p>
        </div>

        <div>
          <h4 className={styles.ShowMore}>Show more reviews</h4>
        </div>
      </div>
    </div>
  );
};

export { CustomerReviews };
