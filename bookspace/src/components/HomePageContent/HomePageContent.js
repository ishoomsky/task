import React from "react";
import BooksListSection from "../BooksListSection/BooksListSection";
import AboutWriters from "../AboutWriters/AboutWriters";

const booksMock = [
  {
    title: "Раньше девочки носили платье в горошек",
    rating: 5,
    author: "Катя Майорова",
    url: "https://s1.livelib.ru/boocover/1005823309/200x305/a832/boocover.jpg",
    bestseller: false,
    new: false,
    year: 2020,
  },
  {
    title:
      "Герои книг на приеме у психотерапевта: Прогулки с врачом по страницам литературных произведений",
    rating: 5,
    author: "Клаудия Хохбрунн, Андреа Боттлингер",
    url: "https://monster-book.com/sites/default/files/styles/sc290x400/public/books/geroi-knig-na-prieme-u-psihoterapevta.png?itok=gNn5Ei-X",
    bestseller: false,
    new: false,
    year: 2021,
  },
  {
    title: "Прислуга",
    rating: 5,
    author: "Кэтрин Стокетт",
    url: "https://s1.livelib.ru/boocover/1001569364/o/bdff/Ketrin_Stokett__Prisluga.jpeg",
    bestseller: false,
    new: false,
    year: 2015,
  },
  {
    title: "Зеленая миля",
    rating: 5,
    author: "Стивен Кинг",
    url: "https://img3.labirint.ru/rc/4389abc064a31b190d01494b3d43b8a7/220x340/books35/348449/cover.png?1612704326",
    bestseller: false,
    new: false,
    year: 1996,
  },
  {
    title: "Властелин колец. Возвращение короля",
    rating: 4.9,
    author: "Дж. Р. Р. Толкин",
    url: "https://img3.labirint.ru/rc/8db65eaf223a010ffd140237d6d73706/220x340/books59/589987/cover.jpg?1564026593",
    bestseller: false,
    new: false,
    year: 2014,
  },
  {
    title: "Цветы для Элджерона",
    rating: 4.9,
    author: "Дэниел Киз",
    url: "https://s1.livelib.ru/boocover/1000216804/o/5f6c/Daniel_Kiz__Tsvety_dlya_Eldzhernona.jpeg",
    bestseller: false,
    new: false,
    year: 1959,
  },
  {
    title: "Симон",
    rating: 4.5,
    author: "Наринэ Абгарян",
    url: "https://s1.livelib.ru/boocover/1005436222/o/999f/Narine_Abgaryan__Simon.jpeg",
    bestseller: false,
    new: true,
    year: 2021,
  },
  {
    title: "Тетрадь в клеточку",
    rating: 4.5,
    author: "Микита Франко",
    url: "https://img4.labirint.ru/rc/ba26d00fe661ab071a5a63bfb6d08a39/220x340/books77/768798/cover.jpg?1613978730",
    bestseller: false,
    new: true,
    year: 2020,
  },
  {
    title: "Пустые холмы",
    rating: 4.4,
    author: "Марина Козинаки, Софи Авдюхина",
    url: "https://s1.livelib.ru/boocover/1005403348/o/ebe4/Marina_Kozinaki_Sofi_Avdyuhina__Pustye_Holmy.jpeg",
    bestseller: false,
    new: true,
    year: 2021,
  },
  {
    title: "Книжные хроники Анимант Крамб",
    rating: 4.2,
    author: "Лин Рина",
    url: "https://s1-goods.ozstatic.by/2000/871/983/10/10983871_0.jpg",
    bestseller: false,
    new: true,
    year: 2021,
  },
  {
    title: "Единственный ребенок",
    rating: 3.8,
    author: "Со Миэ",
    url: "https://img4.labirint.ru/rc/4b59782d7b10708c5e36e14c23b97c51/220x340/books80/792610/cover.jpg?1614669921",
    bestseller: true,
    new: false,
    year: 2021,
  },
  {
    title: "Сестра звезд",
    rating: 3.8,
    author: "Мара Вульф",
    url: "https://img4.labirint.ru/rc/b1992a35b81b227e81cf77aa3ff8810e/220x340/books80/792710/cover.jpg?1614749129",
    bestseller: true,
    new: false,
    year: 2021,
  },
  {
    title: "Зеленая миля",
    rating: 4.8,
    author: "Стивен Кинг",
    url: "https://img4.labirint.ru/rc/aa0c3d46412426eaf2a5f2b2231bafbb/220x340/books75/744564/cover.jpg?1585200398",
    bestseller: true,
    new: false,
    year: 2020,
  },
  {
    title: "Клара и солнце",
    rating: 4.8,
    author: "Кадзуо Исигуро",
    url: "https://img3.labirint.ru/rc/5d815161321edaef50c1f0683e58dd72/220x340/books80/796957/cover.jpg?1626431364",
    bestseller: true,
    new: false,
    year: 2021,
  },
];
const articlesMock = [
  {
    title:
      "Две любви и один кошмар Маргарет Митчелл: Почему автор «Унесённых ветром» спала с пистолетом под подушкой.",
    text: "Имя Маргарет Митчелл было овеяно легендами ещё при её жизни, а на следующий день после её трагической гибели все материалы и ранние рукописи «Унесённых ветром» были сожжены. Супруг писательницы, согласно её завещанию, оставил только те материалы, которые делали авторство его жены неоспоримым. Джон Марш стал вторым мужем Маргарет Митчелл, и ему в течение двух лет приходилось мириться с тем, что супруга не расставалась с пистолетом даже по ночам.",
  },
  {
    title: '"Против меня был целый мир — и я один".',
    text: "О чем писал Михаил Булгаков. Сейчас Михаил Булгаков — один из самых любимых всеми авторов. Но при жизни писателя все было по-другому: его работы запрещались, пьесы не ставились, печатались лишь некоторые рассказы.",
  },
  {
    title: "Профессорка одиночества. Евгения Некрасова об Отессе Мошфег.",
    text: "Исполнилось 40 лет Отессе Мошфег — одной из самых ярких писательниц поколения. По просьбе «Афиши Daily» писательница Евгения Некрасова рассказывает о ней — и поздравляет с днем рождения. ",
  },
  {
    title: "Две гениальные сестры, две звезды Серебряного века.",
    text: "Они были безумно популярны, их произведениями зачитывались, они навсегда вошли в историю русской литературы начала двадцатого века. Обе были наделены неординарным литературным талантом. Серебряный век без них имел бы другое лицо. Но при этом, странное дело, мало кто знает, что они были родными сестрами.",
  },
];

const HomePageContent = () => {
  const newBooks = booksMock.filter((book) => book.new === true);
  const bestsellersBooks = booksMock.filter((book) => book.bestseller === true);
  return (
    <>
      <BooksListSection heading="Новые книги" books={newBooks} />
      <BooksListSection heading="Бестселлеры" books={bestsellersBooks} />
      <AboutWriters articles={articlesMock} />
    </>
  );
};

export default HomePageContent;
