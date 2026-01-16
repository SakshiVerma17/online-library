import dune from "../assets/images/dune.jpg";
import nineteenEightyFour from "../assets/images/1984.jpg";
import fahrenheit451 from "../assets/images/fahrenheit451.jpg";
import foundation from "../assets/images/foundation.jpg";

import mockingbird from "../assets/images/mockingbird.jpg";
import pride from "../assets/images/prideandprejudice.jpg";
import lotr from "../assets/images/lotr.jpg";
import solitude from "../assets/images/solitude.jpg";

import annefrank from "../assets/images/annefrank.jpg";
import sapiens from "../assets/images/sapiens.jpg";
import briefhistory from "../assets/images/briefhistoryoftime.jpg";
import incoldblood from "../assets/images/incoldblood.jpg";



const dummyBooks = [
  // ================= SCIENCE FICTION =================
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    image:dune,
    description:
      "An epic tale of political struggle on a desert planet vital for a universe-spanning resource.",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    category: "Sci-Fi",
    image: nineteenEightyFour,
    description:
      "A dystopian novel about government surveillance and psychological manipulation.",
  },
  {
    id: 3,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    category: "Sci-Fi",
    image: fahrenheit451,
    description:
      "A future society where books are outlawed and burned to suppress ideas.",
  },
  {
    id: 4,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Sci-Fi",
    image: foundation,
    description:
      "A galactic empire’s fall predicted using the science of psychohistory.",
  },

  // ================= FICTION =================
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    image: mockingbird ,
    description:
      "A powerful story about racial injustice and moral growth in the American South.",
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    image: pride ,
    description:
      "A romantic and social satire exploring class and marriage.",
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fiction",
    image: lotr,
    description:
      "An epic fantasy novel set in Middle-earth.",
  },
  {
    id: 8,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    category: "Fiction",
    image: solitude,
    description:
      "A magical realism landmark chronicling the Buendía family.",
  },

  // ================= NON-FICTION =================//
  {
    id: 9,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "Non-Fiction",
    image:annefrank,
    description:
      "The diary of a Jewish girl hiding from the Nazis during the Holocaust.",
  },
  {
    id: 10,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    image: sapiens,
    description:
      "A brief history of humankind from the Stone Age to modern times.",
  },
  {
    id: 11,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Non-Fiction",
    image: briefhistory,
    description:
      "Explains the origin, structure, and fate of the universe.",
  },
  {
    id: 12,
    title: "In Cold Blood",
    author: "Truman Capote",
    category: "Non-Fiction",
    image: incoldblood,
    description:
      "A detailed account of the brutal 1959 Clutter family murders.",
  },
];

export default dummyBooks;
