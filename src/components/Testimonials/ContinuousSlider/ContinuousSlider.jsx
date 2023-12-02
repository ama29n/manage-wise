import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ContinuousSlider.module.css";
import Card from "./Card/Card";

const ContinuousSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10,
    rtl: true,
    cssEase: "linear",
    centerPadding: "10px",
  };

  return (
    <div className={styles["slider-container"]}>
      <Slider {...settings}>
        {testimonialsData.map((obj, index) => {
          return (
            <div key={obj.id} className={styles["slick-slide"]}>
              <Card quote={obj.quote} author={obj.author} role={obj.role} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ContinuousSlider;

const testimonialsData = [
  {
    id: 1,
    quote:
      "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
    author: "Alex",
    role: "IT Manager",
  },
  {
    id: 2,
    quote:
      "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
    author: "Sarah",
    role: "Project Manager",
  },
  {
    id: 3,
    quote:
      "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations.",
    author: "Emily",
    role: "Art Director",
  },
  {
    id: 4,
    quote:
      "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
    author: "David",
    role: "Freelancer",
  },
  {
    id: 5,
    quote:
      "The simplicity of this product is its strength. It's user-friendly and has streamlined our workflow effectively.",
    author: "Sophia",
    role: "Marketing Coordinator",
  },
  {
    id: 6,
    quote:
      "As a small business owner, Manage Wise has been a lifesaver. It provides all the tools we need in one place, saving us time and effort.",
    author: "Michael",
    role: "Business Owner",
  },
  {
    id: 7,
    quote:
      "Our team's communication has never been better since we started using Manage Wise. The messaging and collaboration features have truly made a difference.",
    author: "Brian",
    role: "Team Lead",
  },
  {
    id: 8,
    quote:
      "I appreciate the flexibility Manage Wise offers. It adapts to our changing needs, and the customizable features make it a versatile tool for any team.",
    author: "Jessica",
    role: "Product Manager",
  },
  {
    id: 9,
    quote:
      "The reporting and analytics tools in Manage Wise have provided valuable insights for our projects. It's an essential part of our decision-making process.",
    author: "Thomas",
    role: "Data Analyst",
  },
  {
    id: 10,
    quote:
      "Manage Wise has simplified our onboarding process. The onboarding tools are intuitive, making it easy for new team members to get started quickly.",
    author: "Olivia",
    role: "HR Specialist",
  },
];
