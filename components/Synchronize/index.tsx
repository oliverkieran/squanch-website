"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

const mmssToSeconds = (mmss) => {
  mmss = mmss.split(":");
  const minutes = parseInt(mmss[0]);
  const seconds = parseInt(mmss[1]);
  return minutes * 60 + seconds;
};

const Synchronize = () => {
  const [commentatorId, setCommentatorId] = useState("");
  const [commentatorName, setCommentatorName] = useState("");
  const [game, setGame] = useState("");
  const [streamKey, setStreamKey] = useState("");
  const [gametime, setGametime] = useState("");
  const [syncText, setSyncText] = useState("Synchronize");

  const searchParams = useSearchParams();
  // Get commentator ID from URL at page load
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setCommentatorId(id);
    }
  }, []);

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

  const calculateOffset = async (formData: FormData) => {
    const submitButton = document.getElementById("submit");
    submitButton?.setAttribute("disabled", "true");

    const submitTime = new Date().getTime();
    const enteredGameTime = formData.get("time");
    const commentatorPosition = mmssToSeconds(enteredGameTime);

    // get stream start from commentator object
    const commentator = await fetch(`/api/commentator?id=${commentatorId}`, {
      method: "GET",
    });
    const commentatorData = await commentator.json();
    if (!commentatorData || !commentatorData.streamStart) {
      console.error("Commentator not found.");
      return;
    }
    const streamStart = new Date(commentatorData.streamStart).getTime();

    // TODO: Calculate offset
    const offset = (submitTime - streamStart) / 1000 - commentatorPosition;

    const response = await fetch("/api/commentator/sync/addOffset", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: commentatorId, offset }),
    });
    const responseData = await response.json();
    console.log("Offset saved:", responseData);

    // Show success message
    submitButton?.classList.remove("bg-primary");
    submitButton?.classList.add("bg-success");
    setSyncText("Synchronized");

    // change text back after 5 seconds
    setTimeout(() => {
      submitButton?.removeAttribute("disabled");
      submitButton?.classList.remove("bg-success");
      submitButton?.classList.add("bg-primary");
      setSyncText("Synchronize");
    }, 5000);
  };

  return (
    <>
      <section>
        <div className="container px-6 py-10 mx-auto">
          <div className="bg-info lg:max-w-lg px-5 py-2 rounded-xl">
            <h2 className="text-black text-lg lg:text-xl font-semibold mb-2.5">
              General Information:
            </h2>
            <div className="flex flex-row gap-2 mb-2 text-black">
              <p className="text-md font-medium">Commentator: </p>
              <p className="text-md">{capitalize(commentatorName)}</p>
            </div>
            <div className="flex flex-row gap-2 mb-2 text-black">
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
                <code className="ml-5 bg-stroke dark:bg-waterloo dark:text-black p-1">
                  rtmp://global-live.mux.com:443/app
                </code>
                <li>Input the Stream Key:</li>
                <code className="ml-5 bg-stroke dark:bg-waterloo dark:text-black p-1">
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
                action={calculateOffset}
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
                  id="submit"
                  type="submit"
                  value={syncText}
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
