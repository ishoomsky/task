import React from "react";
import BookDescription from "../BookDescription";
import BookReviews from "../BookReviews/BookReviews";

const booksMock = [
  {
    id: "book-1123123",
    title: "Раньше девочки носили платье в горошек",
    rating: 5,
    description: "",
    author: "Катя Майорова",
    url: "https://s1.livelib.ru/boocover/1005823309/200x305/a832/boocover.jpg",
    bestseller: false,
    new: false,
    year: 2020,
    reviews: [],
  },
  {
    id: "book-1123123123123",
    title:
      "Герои книг на приеме у психотерапевта: Прогулки с врачом по страницам литературных произведений",
    rating: 5,
    description: "",
    author: "Клаудия Хохбрунн, Андреа Боттлингер",
    url: "https://monster-book.com/sites/default/files/styles/sc290x400/public/books/geroi-knig-na-prieme-u-psihoterapevta.png?itok=gNn5Ei-X",
    bestseller: false,
    new: false,
    year: 2021,
    reviews: [],
  },
  {
    id: "book-112312fasdf3",
    title: "Прислуга",
    rating: 5,
    description: "",
    author: "Кэтрин Стокетт",
    url: "https://s1.livelib.ru/boocover/1001569364/o/bdff/Ketrin_Stokett__Prisluga.jpeg",
    bestseller: false,
    new: false,
    year: 2015,
    reviews: [],
  },
  {
    id: "book-111132axvzxcv3123",
    title: "Зеленая миля",
    rating: 5,
    description: "",
    author: "Стивен Кинг",
    url: "https://img3.labirint.ru/rc/4389abc064a31b190d01494b3d43b8a7/220x340/books35/348449/cover.png?1612704326",
    bestseller: false,
    new: false,
    year: 1996,
    reviews: [],
  },
  {
    id: "book-23r4343411123123",
    title: "Властелин колец. Возвращение короля",
    rating: 4.9,
    description: "",
    author: "Дж. Р. Р. Толкин",
    url: "https://img3.labirint.ru/rc/8db65eaf223a010ffd140237d6d73706/220x340/books59/589987/cover.jpg?1564026593",
    bestseller: false,
    new: false,
    year: 2014,
    reviews: [],
  },
  {
    id: "book-11sdfsf23423423123",
    title: "Цветы для Элджерона",
    rating: 4.9,
    description: "",
    author: "Дэниел Киз",
    url: "https://s1.livelib.ru/boocover/1000216804/o/5f6c/Daniel_Kiz__Tsvety_dlya_Eldzhernona.jpeg",
    bestseller: false,
    new: false,
    year: 1959,
    reviews: [],
  },
  {
    id: "book-5555sdfasdf1123123",
    title: "Симон",
    rating: 4.5,
    description: "",
    author: "Наринэ Абгарян",
    url: "https://s1.livelib.ru/boocover/1005436222/o/999f/Narine_Abgaryan__Simon.jpeg",
    bestseller: false,
    new: true,
    year: 2021,
    reviews: [],
  },
  {
    id: "book-sd234565fdgsxcvx1123123",
    title: "Тетрадь в клеточку",
    rating: 4.5,
    description: "",
    author: "Микита Франко",
    url: "https://img4.labirint.ru/rc/ba26d00fe661ab071a5a63bfb6d08a39/220x340/books77/768798/cover.jpg?1613978730",
    bestseller: false,
    new: true,
    year: 2020,
    reviews: [],
  },
  {
    id: "book-sadfgfcv45455411231233423423",
    title: "Пустые холмы",
    rating: 4.4,
    description: "",
    author: "Марина Козинаки, Софи Авдюхина",
    url: "https://s1.livelib.ru/boocover/1005403348/o/ebe4/Marina_Kozinaki_Sofi_Avdyuhina__Pustye_Holmy.jpeg",
    bestseller: false,
    new: true,
    year: 2021,
    reviews: [],
  },
  {
    id: "book-sfdsdfgsdfg435345351123123",
    title: "Книжные хроники Анимант Крамб",
    rating: 4.2,
    description: "",
    author: "Лин Рина",
    url: "https://s1-goods.ozstatic.by/2000/871/983/10/10983871_0.jpg",
    bestseller: false,
    new: true,
    year: 2021,
    reviews: [],
  },
  {
    id: "book-asfdvxcwe45345345dsf1123123",
    title: "Единственный ребенок",
    rating: 3.8,
    description: "",
    author: "Со Миэ",
    url: "https://img4.labirint.ru/rc/4b59782d7b10708c5e36e14c23b97c51/220x340/books80/792610/cover.jpg?1614669921",
    bestseller: true,
    new: false,
    year: 2021,
    reviews: [],
  },
  {
    id: "book-sdfasdf6566654352342342341123123",
    title: "Сестра звезд",
    rating: 3.8,
    description: "",
    author: "Мара Вульф",
    url: "https://img4.labirint.ru/rc/b1992a35b81b227e81cf77aa3ff8810e/220x340/books80/792710/cover.jpg?1614749129",
    bestseller: true,
    new: false,
    year: 2021,
    reviews: [],
  },
  {
    id: "book-fg56565423452345sfdsdf1123123",
    title: "Клара и солнце",
    description:
      "Клара совсем новая. С заразительным любопытством из-за широкого окна витрины она впитывает в себя окружающий мир — случайных прохожих, проезжающие машины и, конечно, живительное Солнце. Клара хочет узнать и запомнить как можно больше — так она сможет стать лучшей Искусственной Подругой своему будущему подростку. От того, кто выберет Клару, будет зависеть её судьба. Чистый, отчасти наивный взгляд на реальность, лишь слегка отличающуюся от нашей собственной, — вот, что дарит новый роман Кадзуо Исигуро. Каково это — любить? И можно ли быть человеком, если ты не совсем человек?",
    rating: 4.8,
    author: "Кадзуо Исигуро",
    url: "https://img3.labirint.ru/rc/5d815161321edaef50c1f0683e58dd72/220x340/books80/796957/cover.jpg?1626431364",
    bestseller: true,
    new: false,
    year: 2021,
    reviews: [
      {
        author: "Сергей",
        review:
          "Хорошая книжка. Узнаваемый язык Исигуро и фирменная его воздушно-дымчатая атмосфера.",
      },
    ],
  },
];

const mockId = "book-fg56565423452345sfdsdf1123123";
//get id from url
const BookPageContent = () => {
  const currentBook = booksMock.find((book) => book.id === mockId);
  const { author, title, description, url, reviews } = currentBook;

  return (
    <>
      <BookDescription
        author={author}
        title={title}
        description={description}
        url={url}
      />
      <BookReviews reviews={reviews} />
    </>
  );
};

export default BookPageContent;