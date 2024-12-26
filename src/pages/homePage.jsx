import ListCards from "../Components/Layouts/ListCards";
import { getInitialData } from "../utils/index";
const HomePage = () => {
  const datas = getInitialData();
  return (
    <div>
      <ListCards datas={datas}></ListCards>
    </div>
  );
};
export default HomePage;
