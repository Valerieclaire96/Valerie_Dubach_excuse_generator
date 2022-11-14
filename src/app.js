/* eslist-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["A", "The", "That"];
  let subject = [
    "professional pickleball player",
    "the neighborhood platypus",
    "puppy",
    "Funko Pop",
    "cyclist"
  ];
  let action = [
    "stole my",
    "shredded my",
    "flushed my",
    "airfryed",
    "ran over my",
    "blended my"
  ];
  let possession = [
    "favorite blanket",
    "last cookie",
    "my scooter",
    "assingment for 4Geeks academy",
    "most used pyrex dish",
    "Iwatch",
    "phone charger",
    "reusable waterbottle"
  ];
  let where = [
    "on my back patio",
    "in my covered wagon",
    "in the spaceship",
    "on the stoop",
    "in front of Panda Express"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[posIndex] +
    " " +
    where[whereIndex]
  );
};
