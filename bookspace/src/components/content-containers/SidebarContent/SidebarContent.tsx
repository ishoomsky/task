import RatedBooks from "../../common/RatedBooks";
import News from "../../common/News";
import initData from "../../../assets/books.json";
import initNews from "../../../assets/news.json";

const SidebarContent: React.FC = () => {

  const rateBooks = initData
    .filter((book) => book.rating >= 4)
    .sort((a, b) => b.rating - a.rating);

  return (
    <>
      <RatedBooks books={rateBooks} />
      <News news={initNews} />
    </>
  );
};

export default SidebarContent;
