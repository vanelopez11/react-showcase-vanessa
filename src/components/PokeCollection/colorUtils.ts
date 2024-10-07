export const colorType = (pokemonType: string) => {
  switch (pokemonType) {
    case "type":
      return { backgroundColor: "hsla(0, 0%, 40%, 1)" };
    case "normal":
      return { backgroundColor: "hsla(54, 20%, 58%, 1)" };
    case "fighting":
      return { backgroundColor: "hsla(351, 70%, 45%, 1)" };
    case "flying":
      return { backgroundColor: "hsla(351, 70%, 45%, 1)" };
    case "ground":
      return { backgroundColor: "hsla(45, 64%, 65%, 1)" };
    case "poison":
      return { backgroundColor: "hsla(304, 45%, 44%, 1)" };
    case "rock":
      return { backgroundColor: "hsla(49, 58%, 45%, 1)" };
    case "bug":
      return { backgroundColor: "hsla(66, 68%, 43%, 1)" };
    case "ghost":
      return { backgroundColor: "hsla(263, 29%, 47%, 1)" };
    case "steel":
      return { backgroundColor: "hsla(235, 21%, 77%, 1)" };
    case "fire":
      return { backgroundColor: "hsla(23, 91%, 58%, 1)" };
    case "water":
      return { backgroundColor: "hsla(219, 77%, 66%, 1)" };
    case "grass":
      return { backgroundColor: "hsla(100, 56%, 54%, 1)" };
    case "electric":
      return { backgroundColor: "hsla(47, 94%, 58%, 1)" };
    case "psychic":
      return { backgroundColor: "hsla(343, 95%, 66%, 1)" };
    case "ice":
      return { backgroundColor: "hsla(188, 52%, 74%, 1)" };
    case "dragon":
      return { backgroundColor: "hsla(257, 100%, 61%, 1)" };
    case "dark":
      return { backgroundColor: "hsla(16, 21%, 38%, 1)" };
    case "fairy":
      return { backgroundColor: "hsla(348, 59%, 76%, 1)" };
    default:
      return { backgroundColor: "hsla(0, 0%, 0%, 0.1)" }; // Color por defecto
  }
};
