'use strict';

// 1) Добавить комментарий для элемента каталога в localstorage. Прочитать из  localstorage и вывести на страницу. 

class LocalStorageApi {
  constructor() {
    this.lsKey = 'bookspace-reviews';
    this.initialData = [
      { reviewer: "Сергей", review: "Хорошая книжка. Узнаваемый язык Исигуро и фирменная его воздушно-дымчатая атмосфера." },
      { reviewer: "Олег", review: "Хорошая книжка. Стоит своих деняк" },
    ];
  }
  get() {
    const lsData = localStorage.getItem(this.lsKey);
    const data = JSON.parse(lsData);
    return data;
  }
  set (data) {
    localStorage.setItem(this.lsKey, JSON.stringify(data));  
  }
  initLS() {
    this.set(this.initialData);
  }
}
const localStorageApi = new LocalStorageApi();
localStorageApi.initLS();

class BookReviews {
  handleSubmitButton() {
    const button = document.querySelector(".page-form__submit-button");
    const reviewerEl = document.querySelector('input[name="reviewer-name"]');
    const reviewEl = document.querySelector('textArea[name="reviewer-text"]');
    button.addEventListener('click', (e) => {
      e.preventDefault();
    const isPublish = confirm('Опубликовать отзыв?');
    if(isPublish) {
      this.addReview(reviewerEl.value, reviewEl.value);
      this.update();
    }
    });
  }
  renderReviewElement(reviewer, review) {
    const item = document.createElement('div');
    item.classList.add("book-reviews-list__book-reviews-item");

    const itemHeader = document.createElement('div');
    itemHeader.classList.add("book-reviews-item__header");

    const itemText = document.createElement('div');
    itemText.classList.add("book-reviews-item__review-text");

    const itemHeaderIcon = document.createElement('div');
    itemHeaderIcon.classList.add("book-reviews-item__icon");

    const itemHeaderName = document.createElement("div");
    itemHeaderName.classList.add("book-reviews-item__name");

    itemHeaderName.innerText = reviewer;
    itemText.innerText = review;

    itemHeader.append(itemHeaderIcon);
    itemHeader.append(itemHeaderName);

    item.append(itemHeader);
    item.append(itemText);

    return item;
  }
  renderReviews () {
    const data = localStorageApi.get();
    let reviews = document.createElement('div');
    data.forEach(({ reviewer, review }) => {
      const reviewElement = this.renderReviewElement(reviewer, review);
      reviews.append(reviewElement);
    });
    const rootDomElement = document.querySelector(".book-reviews-list");
    rootDomElement.innerHTML = reviews.innerHTML;
  }
  addReview (reviewer, review) {
    const data = localStorageApi.get();
    data.push({ reviewer, review });
    localStorageApi.set(data);
  }
  resetForm() {
    const reviewerEl = document.querySelector('input[name="reviewer-name"]');
    const reviewEl = document.querySelector('textArea[name="reviewer-text"]');
    reviewerEl.value = "";
    reviewEl.value = "";
  }
  update() {
    this.resetForm();
    this.renderReviews();
  }
};

const bookReviews = new BookReviews ();
bookReviews.handleSubmitButton();
bookReviews.renderReviews();

// 2) Создать промис, внутри которого будет задержка setTimeout в 5 секунды, после которой промис должен зарезолвится. 
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 5000)
});

function timeoutPromise() {
  return new Promise((resolve) => {
    console.log("Timeout promise created...");
    setTimeout(() => {
      resolve("...Timeout promise resolved");
    }, 5000);
  });
}
timeoutPromise().then((res) => console.log(res));

//3) Создать функцию, которая будет генерировать случайные числа от 1 до 10. 
// Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах. 
// Все оберните в промис. Если сгенерировано число от 1 до 5, то промис выполнится успешно, если от 6 до 10 – то с ошибкой.

async function randomIntPromise() {
  return new Promise((resolve, reject) => {
    console.log("Random integer promise created...");
    setTimeout(() => {
      const integer = Math.floor(Math.random() * 10) + 1;
      if (integer <= 5) {
        resolve("...Random integer promise resolved with integer " + integer);
      }
      if (integer >= 6) {
        reject("...Random integer promise rejected with integer " + integer);
      }
    }, 500);
  });
}
randomIntPromise().then((res) => console.log(res)).catch((err) => console.log(err))

//4) Создать промис, чтобы выполнился с ошибкой, добавить catch, который поймает эту ошибку.
async function errorPromise() {
  try {
    // let response = await fetch("http://no-such-url");
    let promise = await new Promise((_, reject) => {
      reject(new Error('Some error!'))
    });
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}

errorPromise();