import classes from "../style/Login.module.css";

const ButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const currentSlide = carouselState?.currentSlide || 0;

  return (
    <div className={`custom-button-group ${classes.t_control}`}>
      <button
        onClick={previous}
        className={`${classes.custom} ${
          currentSlide === 0 ? classes.activate : ""
        } ${classes.left}`}
      />
      <button
        onClick={() => goToSlide(1)}
        className={`${classes.custom} ${
          currentSlide === 1 ? classes.activate : ""
        } ${classes.center}`}
      />
      <button
        onClick={next}
        className={`${classes.custom} ${
          currentSlide === 2 ? classes.activate : ""
        } ${classes.right}`}
      />
    </div>
  );
};

export default ButtonGroup;
