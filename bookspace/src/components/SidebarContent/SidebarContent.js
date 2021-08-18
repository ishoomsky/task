import React from "react";
import styled from "styled-components";

import RatedBooks from "../RatedBooks";
import News from "../News";

const ratedBooksMock = [
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
];
const newsMock = [
  {
    date: "25 мая 2021, 19:00",
    title:
      "Презентация новой книги Натали Ратковски “Художник. Как мыслят творческие люди” в Московском Доме Книги на Новом Арбате, 8.",
  },
];

const SidebarContent = () => {
  return (
    <SidebarContainer>
      <RatedBooks content={ratedBooksMock} />
      <News content={newsMock} />
    </SidebarContainer>
  );
};

export default SidebarContent;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
