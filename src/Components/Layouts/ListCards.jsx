/* eslint-disable react/prop-types */
import Card from "../Fragments/Card";
const ListCards = (props) => {
  const { datas } = props;
  return (
    <div className="flex flex-wrap gap-2">
      {datas.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          content={data.body}
          times={data.createdAt}
        ></Card>
      ))}
    </div>
  );
};

export default ListCards;
