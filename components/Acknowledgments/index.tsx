import Image from "next/image";
import imageAckData from "./acks";

export default function Acknowledgments() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-black dark:text-slate-200 text-4xl font-semibold mb-10">
        Acknowledgments
      </h1>
      <p className="mb-7">
        On this page, we extend our gratitude to the talented creators whose
        works have enriched our website. Each image, icon, or graphic used has
        been thoughtfully chosen to enhance the user experience. Below, you'll
        find a detailed list of attributions, acknowledging the original
        creators and the sources from which we've obtained these visual assets.
        We believe in giving credit where it's due, and we're proud to recognize
        and celebrate the contributions of these artists.
      </p>
      <div className="flex flex-wrap itens-center gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-5">
        {imageAckData.map((ack) => (
          <div className="bg-white rounded-lg">
            <Image
              className="dark:hidden"
              width={500}
              height={500}
              src={ack.image}
              alt={ack.alt}
            />
            <Image
              className="hidden dark:block h-max"
              width={500}
              height={500}
              src={ack.imageDark}
              alt={ack.alt}
            />
            <div className="flex justify-center text-sm mb-4">
              <p>{ack.description}</p>
              <a href={ack.href} className="ml-1 text-blue-500">
                {ack.hrefText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
