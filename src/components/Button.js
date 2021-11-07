import PropTypes from "prop-types";

function Button({ color }) {
  const onClick = () => {
    console.log("click");
  };

  return (
    <button className="todo-btn" style={{ backgroundColor: color }} onClick={onClick}>
      Add
    </button>
  );
}

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
