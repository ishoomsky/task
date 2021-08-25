import IReview from "./IReview";

export default interface IBook {
  id: string;
  title: string;
  rating: number;
  description: string;
  author: string;
  url: string;
  bestseller: boolean;
  new: boolean;
  year: number;
  reviews: Array<IReview>;
}