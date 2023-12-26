export const keyframes = {
  fadesin: {
    "0%,100%": {
      transform: "rotate(-5deg)",
    },
    "50%": {
      transform: "rotate(5deg)",
    },
  },
  wiggle: {
    "0%, 100%": {
      transform: "rotate(-3deg)",
    },
    "50%": { transform: "rotate(3deg)" },
  },
};

export const animations = {
  wiggle: "wiggle 1s ease-in-out infinite",
  fadesin: "fadesin 3s ease-in-out infinite",
};
