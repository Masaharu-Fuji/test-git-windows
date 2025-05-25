import "./style.scss";
import "./test.scss";

// Splide
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";
import "@splidejs/splide/css/core";

new Splide(".splide", {
  type: "loop",
  perPage: 2,
}).mount();
