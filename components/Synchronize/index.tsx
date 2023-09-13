"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );
const Synchronize = () => {
  const [commentatorName, setCommentatorName] = useState("");
  const [game, setGame] = useState("");
  const [streamKey, setStreamKey] = useState("");
  const [gametime, setGametime] = useState("");

  const searchParams = useSearchParams();
  const commentatorId = searchParams.get("id");

  useEffect(() => {
    if (commentatorId) {
      fetch(`/api/commentator?id=${commentatorId}`)
        .then((response) => response.json())
        .then((data) => {
          const commentator = data.commentator;
          const name = `${commentator.firstname} ${commentator.lastname}`;
          setCommentatorName(name);
          setGame(data.game.title);
          setStreamKey(data.streamKey);
        });
    }
  }, [commentatorId]);

  return (
    <>
      <section>
        <div className="container px-6 py-10 mx-auto">
          <div className="bg-info lg:max-w-lg px-5 py-2 rounded-xl">
            <h2 className="text-black text-lg lg:text-xl font-semibold mb-2.5">
              General Information:
            </h2>
            <div className="flex flex-row gap-2 mb-2">
              <p className="text-md font-medium">Commentator: </p>
              <p className="text-md">{capitalize(commentatorName)}</p>
            </div>
            <div className="flex flex-row gap-2 mb-2">
              <p className="text-md font-medium">Game:</p>
              <p className="text-md">{game}</p>
            </div>
          </div>
          <div className="mt-8 lg-mx-6 lg:flex">
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black dark:text-white">
                Stream Setup
              </h2>
              <p className="mb-4">
                Follow these steps to set up your live stream in OBS (Open
                Broadcaster Software):
              </p>
              <ol className="list-decimal list-inside mb-4">
                <li>Open OBS and go to Settings &gt; Stream.</li>
                <li>
                  Select the service as "Custom" and input the following URL:
                </li>
                <code className="ml-5 bg-alabaster dark:bg-waterloo dark:text-black p-1">
                  rtmps://global-live.mux.com:443/app
                </code>
                <li>Input the Stream Key:</li>
                <code className="ml-5 bg-alabaster dark:bg-waterloo dark:text-black p-1">
                  {streamKey}
                </code>
              </ol>
            </div>
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black dark:text-white">
                Synchronization
              </h2>
              <p>
                To synchronize your stream, please input the current time of the
                game you are watching.
              </p>
              <p className="mb-4">
                The time should be in the format of <code>mm:ss</code>.
              </p>
              <form
                action="{% url 'commentators:addOffset' commentator.id %}"
                method="post"
                id="timeForm"
                className="flex flex-col max-w-max"
              >
                <label
                  htmlFor="time"
                  className="block text-sm font-medium mb-2"
                >
                  Enter the game time:
                </label>
                <input
                  id="time"
                  name="time"
                  type="text"
                  placeholder="00:00"
                  value={gametime}
                  onChange={(e) => setGametime(e.target.value)}
                  className="text-black border rounded py-2 px-4 mb-4"
                  pattern="([0-9]?[0-9]|1[01][0-9]):([0-5]?[0-9])"
                  required
                />
                <input
                  type="submit"
                  value="Synchronize"
                  className="bg-primary text-white rounded px-4 py-2 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Synchronize;
