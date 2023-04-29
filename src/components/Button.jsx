const Button = ({ type = 'button', className = '', children }) => {
  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  );
};
export default Button;
