import React, { useState } from "react";

function Herosection() {
  const [url, setUrl] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  function extractVideoId(url) {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|.+\/|)([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  const changeHandler = (e) => {
    e.preventDefault();
    const videoId = extractVideoId(url);
    if (videoId) {
      const newThumbnails = [
        {
          size: "120x90",
          quality: "Low",
          url: `https://i.ytimg.com/vi/${videoId}/1.jpg`,
        },
        {
          size: "120x90",
          quality: "Low",
          url: `https://i.ytimg.com/vi/${videoId}/2.jpg`,
        },
        {
          size: "120x90",
          quality: "Low",
          url: `https://i.ytimg.com/vi/${videoId}/3.jpg`,
        },
        {
          size: "120x90",
          quality: "Low",
          url: `https://i.ytimg.com/vi/${videoId}/default.jpg`,
        },
        {
          size: "320x180",
          quality: "Medium",
          url: `https://i.ytimg.com/vi/${videoId}/mq1.jpg`,
        },
        {
          size: "320x180",
          quality: "Medium",
          url: `https://i.ytimg.com/vi/${videoId}/mq2.jpg`,
        },
        {
          size: "320x180",
          quality: "Medium",
          url: `https://i.ytimg.com/vi/${videoId}/mq3.jpg`,
        },
        {
          size: "320x180",
          quality: "Medium",
          url: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
        },
        {
          size: "480x360",
          quality: "High",
          url: `https://i.ytimg.com/vi/${videoId}/0.jpg`,
        },
        {
          size: "480x360",
          quality: "High",
          url: `https://i.ytimg.com/vi/${videoId}/hq1.jpg`,
        },
        {
          size: "480x360",
          quality: "High",
          url: `https://i.ytimg.com/vi/${videoId}/hq2.jpg`,
        },
        {
          size: "480x360",
          quality: "High",
          url: `https://i.ytimg.com/vi/${videoId}/hq3.jpg`,
        },
        {
          size: "480x360",
          quality: "High",
          url: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        },
      ];
      setThumbnails(newThumbnails);
      setUrl("");
    } else {
      alert("Invalid URL. Please enter a valid YouTube URL.");
      setUrl("");
    }
  };

  const downloadImage = (imageUrl, fileName) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-400 min-h-screen to-indigo-600 flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-2xl text-center ">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Download Thumbnails Instantly
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Download YouTube thumbnail images of any quality for free. Just paste
          the URL of the video below and click "Get Thumbnail Image".
        </p>
        <div className="flex justify-center items-center space-x-4 mb-6">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Enter video URL"
            className="w-3/4 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={changeHandler}
            className="px-2 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Get Thumbnail
          </button>
        </div>
      </div>
      {thumbnails.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 px-4">
          {thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              className="flex flex-col items-center border rounded-md p-4 bg-white shadow-md"
            >
              <img
                src={thumbnail.url}
                alt={`Thumbnail ${thumbnail.size}`}
                className="w-full max-w-xs rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold">
                {thumbnail.size} ({thumbnail.quality})
              </h2>
              <button
                onClick={() =>
                  downloadImage(
                    thumbnail.url,
                    `${thumbnail.size}-thumbnail.jpg`
                  )
                }
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Download {thumbnail.size} Image
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Herosection;
