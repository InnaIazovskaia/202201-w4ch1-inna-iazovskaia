const Button = ({ className, text, actionOnClick }) => {
  return (
    <button class={className} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
