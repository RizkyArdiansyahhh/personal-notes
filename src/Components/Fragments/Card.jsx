/* eslint-disable react/prop-types */
import Button from "../Elements/Button";

const Card = (props) => {
  const { title, time, content, onDelete, id } = props;
  return (
    <div className="w-64 h-80  bg-white shadow-[0_0_2px_1px_rgba(0,0,0,.1)]  py-2 rounded-lg flex flex-col justify-between gap-y-2 hover:scale-105 transition duration-200">
      <h1 className="text-slate-800 font-semibold px-2">{title}</h1>
      <p className="text-xs font-medium text-slate-600 px-2">{time}</p>
      <p className="text-xs text-slate-500 px-2 w-5/6 h-full">{content}</p>
      <div className="flex justify-between">
        <Button
          id={id}
          onDelete={onDelete}
          style="text-red-700 hover:bg-red-700  border border-transparent hover:border-red hover:text-white rounded-[0_20px_20px_0] transition duration-200"
        >
          Hapus
        </Button>
        <Button style="bg-primary rounded-[20px_0_0_20px] border border-transparent hover:border-primary  transition duration-200 hover:bg-white">
          Arsipkan
        </Button>
      </div>
    </div>
  );
};
export default Card;
