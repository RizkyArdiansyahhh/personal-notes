/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, value, onChange = () => {}, style = " " } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`${style} border border-slate-300 rounded-md shadow-sm   px-3 py-2  block focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
      onChange={onChange}
    />
  );
};
export default Input;
