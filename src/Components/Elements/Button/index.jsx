/* eslint-disable react/prop-types */
const Button = (props) => {
  const { type, style = " ", children, id, onDelete = () => {} } = props;
  return (
    <button
      type={type}
      className={`px-2 py-1 font-semibold text-sm ${style}`}
      onClick={() => onDelete(id)}
    >
      {children}
    </button>
  );
};
export default Button;
