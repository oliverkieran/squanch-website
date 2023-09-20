import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "Quick Setup",
    description:
      "Simply download our extension and you are all set to listen to your favourite commentators.",
    tag: "Viewer",
    tagColor: "emerald-400",
  },
  {
    id: 2,
    icon: "/images/icon/icon-06.svg",
    title: "Automatic Synchronization",
    description:
      "Select your commentator and the audio will be synchronized with the game automatically.",
    tag: "Viewer",
    tagColor: "emerald-400",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Custom Fine-Tuning",
    description:
      "Use the fine-tuning controls to improve the automatic synchronization. ",
    tag: "Viewer",
    tagColor: "emerald-400",
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "One-Click Synchronization",
    description:
      "Click one button to synchronize your audio with the video of your fans and you are ready to commentate. ",
    tag: "Commentator",
    tagColor: "sky-400",
  },
];

export default featuresData;
