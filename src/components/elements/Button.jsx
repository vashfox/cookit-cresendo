function Button({ label, onClick, className }) {
  return (
    <button className={`btn ${className}`} type="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
