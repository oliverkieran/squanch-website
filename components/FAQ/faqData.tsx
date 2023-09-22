import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "I want to commentate a game. How do I do that?",
    ans: "To be able to commentate, you need to instal (OBS)[https://obsproject.com/download] (Open Broadcaster Software) and watch the game on cable TV. Then simply click the 'Commentate' button in the navigation bar and you will be taken to a page where you will be given the required live streaming details. To synchronize your voice with the game of other viewers, input the current game time and click the 'Synchronize' button.",
  },
  {
    id: 2,
    quest: "Is this project still active?",
    ans: "We are currently not developing any new features for this project. However, we are still maintaining the project and will continue to do so for the foreseeable future. If you have any recommendations for new features, or are interested in collaborating with us, please contact us at info@squanch.tv.",
  },
  {
    id: 3,
    quest: "How can I support this project?",
    ans: "Live Streaming is quite expensive. If you like to project and are interested in supporting, please contact us at info@squanch.tv.",
  },
];

export default faqData;
