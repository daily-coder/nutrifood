import fruitsImage from "../../../public/images/fruits.jpg";
import nutsImage from "../../../public/images/nuts.jpg";
import vegetablesImage from "../../../public/images/vegetables.jpg";
import wholeGrainsImage from "../../../public/images/whole-grains.jpg";

const PRODUCT_ITEMS_DATA = [
  {
    title: "fruits",
    alt: "Image of fruits in a bowl and fruits spread around it",
    src: fruitsImage,
    href: "/store#fruits",
  },
  {
    title: "vegetables",
    alt: "Image of vegetables spread on the table",
    src: vegetablesImage,
    href: "/store#vegetables",
  },
  {
    title: "nuts",
    alt: "Image of glass jar spilling nuts on the table",
    src: nutsImage,
    href: "/store#nuts",
  },
  {
    title: "whole grains",
    alt: "Image of whole grains spread on the table",
    src: wholeGrainsImage,
    href: "/store",
  },
];

export default PRODUCT_ITEMS_DATA;
