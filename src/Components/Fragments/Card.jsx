import Button from "../Elements/Button";

const Card = (props) => {
  const { title, time, content } = props;
  return (
    <div className="w-1/4 bg-white shadow-[0_0_10px_1px_rgba(0,0,0,.2)]  py-2 rounded-lg">
      <h1 className="text-slate-800 font-semibold px-2">{title}</h1>
      <p className="text-sm font-medium text-slate-600 px-2">{time}</p>
      <p className="text-xs text-slate-500 px-2 w-5/6">{content}</p>
      <div className="flex justify-between">
        <Button style="text-red-700">Hapus</Button>
        <Button style="bg-[#c2e2a2] rounded-[20px_0_0_20px]">Arsipkan</Button>
      </div>
    </div>
  );
};
export default Card;
