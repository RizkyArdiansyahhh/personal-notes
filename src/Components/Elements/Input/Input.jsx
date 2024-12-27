/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, value, onChange = () => {} } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      value={value}
      className={`border border-slate-300 rounded-md shadow-sm   px-3 py-2 w-full block focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
      onChange={onChange}
    />
  );
};
export default Input;
