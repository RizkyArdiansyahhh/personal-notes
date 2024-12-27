/* eslint-disable react/prop-types */
const InputTextArea = (props) => {
  const { name, placeholder, value, onChange = () => {} } = props;
  return (
    <textarea
      name={name}
      id={name}
      rows="4"
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      className={`border border-slate-300 rounded-md shadow-sm block  px-3 py-2 w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
    ></textarea>
  );
};

export default InputTextArea;