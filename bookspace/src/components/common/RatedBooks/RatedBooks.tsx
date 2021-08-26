import RatedBooksSidebar from "./RatedBooksSidebar";
import RatedBooksMain from "./RatedBooksMain";
import IBook from "../../../interfaces/IBook";

interface RatedBooksProps {
  books: Array<IBook>;
  large?: boolean;
}

const RatedBooks: React.FC<RatedBooksProps> = (props) => {
  const { books = [], large = false } = props;

  if (large) {
    return <RatedBooksMain books={books} />;
  }

  return <RatedBooksSidebar books={books} />;
};

export default RatedBooks;
