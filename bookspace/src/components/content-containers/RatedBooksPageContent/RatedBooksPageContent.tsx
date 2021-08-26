import RatedBooks from "../../common/RatedBooks";
import initData from "../../../assets/books.json";
import IBook from "../../../interfaces/IBook";

const RatedBooksPageContent: React.FC = () => {

  const sortedBooks: Array<IBook> = initData.sort((a, b) => b.rating - a.rating);

  return <RatedBooks large books={sortedBooks} />;
};

export default RatedBooksPageContent;
