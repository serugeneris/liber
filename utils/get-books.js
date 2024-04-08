const ALL_BOOKS = [
  {
    id: 1,
    title: "Politics",
    author: "Aristotle",
    image: "politics-aristotle.jpg",
    featured: true,
    description:
      'The title of Politics literally means "the things concerning the πόλις (polis)", and is the origin of the modern English word politics. As Aristotle explains, this is understood by him to be a study of how people should best live together in communities — the polis being seen by him as the best and most natural community for humans.',
  },
  {
    id: 2,
    title: "Republic",
    author: "Plato",
    image: "republic-plato.jpg",
    featured: true,
    description:
      "In the dialogue, Socrates discusses the meaning of justice and whether the just man is happier than the unjust woman with various Athenians and foreigners.[5] He considers the natures of existing regimes and then proposes a series of hypothetical cities in comparison, culminating in Kallipolis (Καλλίπολις), a utopian city-state ruled by a class of philosopher-kings. They also discuss ageing, love, theory of forms, the immortality of the soul, and the role of the philosopher and of poetry in society.[6] The dialogue's setting seems to be the time of the Peloponnesian War.[7]",
  },
  {
    id: 3,
    title: "Odyssey",
    author: "Homer",
    image: "odyssey-homer.jpg",
    featured: false,
    description:
      "The Odyssey (/ˈɒdɪsi/;[1] Ancient Greek: Ὀδύσσεια, romanized: Odýsseia)[2][3] is one of two major ancient Greek epic poems attributed to Homer. It is one of the oldest extant works of literature still widely read by modern audiences. As with the Iliad, the poem is divided into 24 books. It follows the Greek hero Odysseus, king of Ithaca, and his journey home after the Trojan War. After the war, which lasted ten years, his journey from Troy to Ithaca, via Africa and southern Europe, lasted for ten additional years during which time he encountered many perils and all of his crewmates were killed. In his absence, Odysseus was assumed dead, and his wife Penelope and son Telemachus had to contend with a group of unruly suitors who were competing for Penelope's hand in marriage.",
  },
];

export function getAllBooks() {
  return ALL_BOOKS;
}

export function getFeaturedBooks() {
  return ALL_BOOKS.filter((book) => book.featured);
}

export function getBookById(id) {
  return ALL_BOOKS.find((book) => book.id === parseInt(id));
}
