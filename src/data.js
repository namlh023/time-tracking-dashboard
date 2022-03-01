import iconPlay from "./assets/images/icon-play.svg";
import iconWork from "./assets/images/icon-work.svg";
import iconStudy from "./assets/images/icon-study.svg";
import iconSocial from "./assets/images/icon-social.svg";
import iconSelfCare from "./assets/images/icon-self-care.svg";
import iconExercise from "./assets/images/icon-exercise.svg";

export const data = [
  {
    title: "Work",
    bgColor: "hsl(15, 100%, 70%)",
    icon: iconWork,
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    bgColor: "hsl(195, 74%, 62%)",
    icon: iconPlay,
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    bgColor: "hsl(348, 100%, 68%)",
    icon: iconStudy,
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    bgColor: "hsl(145, 58%, 55%)",
    icon: iconExercise,
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    bgColor: "hsl(264, 64%, 52%)",
    icon: iconSocial,
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    bgColor: "hsl(43, 84%, 65%)",
    icon: iconSelfCare,
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
