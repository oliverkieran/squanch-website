import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "Quick Setup",
    description:
      "All it takes to listen to your favorite commentators is just one simple download. Simply download the app and you're ready to go!",
    tag: "Viewer",
    tagColor: "gametime",
  },
  {
    id: 2,
    icon: "/images/icon/icon-06.svg",
    title: "Automatic Synchronization",
    description:
      "Once a commentator is selected, the app will automatically synchronize the audio with the game.",
    tag: "Viewer",
    tagColor: "gametime",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Custom Fine Tuning",
    description:
      "In case our synchronization is not spot-on, we provide you with fine-tuning controls to get the synchronization just right.",
    tag: "Viewer",
    tagColor: "gametime",
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "One-Click Synchronization",
    description:
      "As a commentator, all you need to do is click one single button to synchronize your audio with all your fans.",
    tag: "Commentator",
    tagColor: "commentator",
  },
];

export default featuresData;
