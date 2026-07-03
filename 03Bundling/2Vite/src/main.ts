import styles from "./style.module.css";

console.log(import.meta.env.VITE_MESSAGE);

const title = document.createElement("h1");
title.textContent = "Hola Mundo";
title.className = styles.title;

document.body.appendChild(title);
