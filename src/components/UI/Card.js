import './Card.css';

// used as a wrapper for all card-styled elements
function Card(props) {
  // adds card class name and passed in props value class name
  // so element receives card styling as well as element-specific styling
  const classes = 'card ' + props.className;

  return (
    <div className={classes}>
      {/* allows all JSX used between Card component tags
        to be automatically passed as props of Card */}
      {props.children}
    </div>
  );
};

export default Card;