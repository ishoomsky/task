import RatedBooks from "../RatedBooks";
import initData from "../../assets/books.json";

const RatedBooksPageContent = () => {

  const sortedBooks = initData.sort((a, b) => b.rating - a.rating);

  return <RatedBooks large books={sortedBooks} />;
};

export default RatedBooksPageContent;
