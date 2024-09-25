import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SongLyricsFinder() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [control, setControl] = useState(false);
  const [loading, setLoading] = useState(false);
  const slogans = [
    "Feel the Music, Discover the Lyrics!",
    "Chasing Words, Following the Music!",
    "Don’t Get Lost in Melodies, Find the Lyrics!",
  ];

  const musicPlaces = "Spotify, Youtube Music";

  useEffect(() => {
    if (artist === "" && song === "") {
      setControl(false);
      setLyrics("");
      setSongTitle("");
      setLoading(false);
    }
  }, []);

  const searchLyrics = () => {
    if (artist === "" || song === "") {
      setControl(false);
      return;
    }
    setLoading(true);
    setControl(true);
    try {
      fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then((res) => res.json())
        .then((data) => {
          setLyrics(data.lyrics);
          const title = `${song[0].toUpperCase()}${song.slice(1)}`;
          setSongTitle(title);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        })
        .catch(() => {
          setLoading(false);
          setLyrics("");
          setSongTitle("");
        });
    } catch (error) {
      setLoading(false);
      setLyrics("");
      setSongTitle("");
    }
  };

  const handleSearch = (where = "spotify") => {
    const url =
      where === "spotify"
        ? `https://open.spotify.com/search/${song}`
        : `https://www.youtube.com/results?search_query=${song}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center p-10 w-full min-h-screen">
      <div
        style={{ scrollBehavior: "smooth" }}
        className="w-[640px] flex flex-col gap-2.5 text-white"
      >
        <h1 className="text-4xl text-gray-400 font-medium mb-2.5">
          Song Lyrics Finder
        </h1>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col">
            <header className="text-gray-300 font-medium text-lg">
              Artist name
            </header>
            <input
              className="border-2 border-solid border-gray-500 text-blue-100 focus:border-gray-400 rounded-md px-2.5 h-12 bg-gray-500 bg-opacity-20 duration-200 font-medium"
              type="text"
              placeholder="Enter the Artist name"
              value={artist}
              onChange={(e) => {
                setArtist(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <header className="text-gray-300 font-medium text-lg">
              Song name
            </header>
            <input
              className="border-2 border-solid border-gray-500 text-blue-100 focus:border-gray-400 rounded-md px-2.5 h-12 bg-gray-500 bg-opacity-20 duration-200 font-medium"
              type="text"
              placeholder="Enter the Song name"
              value={song}
              onChange={(e) => {
                setSong(e.target.value);
              }}
            />
          </div>
          <button
            onClick={searchLyrics}
            type="button"
            disabled={artist === "" || song === ""}
            className="flex items-center justify-center gap-1 text-lg h-14 bg-blue-400 font-medium rounded-full hover:bg-opacity-30 duration-200 bg-opacity-20 disabled:pointer-events-none disabled:opacity-40 mt-2.5"
          >
            <i className="fa-solid fa-magnifying-glass bg-gradient-to-tr to-blue-400 from-indigo-400 text-xl bg-clip-text text-transparent p-1"></i>
            <span>Search</span>
          </button>
          {control && lyrics !== "" && !loading && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2.5 flex-wrap mt-7 mb-1.5"
            >
              <div className="text-gray-400 text-lg font-medium">
                Listen the <span className="text-gray-300">{songTitle}</span> on
              </div>
              {musicPlaces.split(", ").map((place, i) => (
                <button
                  onClick={() => handleSearch(place.toLowerCase())}
                  key={i}
                  className={classNames(
                    "bg-blue-500 bg-opacity-30 text-blue-300 hover:bg-opacity-20 duration-200 px-2.5 h-12 rounded-lg flex items-center justify-center gap-1.5 border-2 border-solid border-[#535353]",
                    {
                      "!text-[#1db954] !bg-gradient-to-tr !to-[#212121] !from-[#121212] hover:!border-[#1db954]":
                        place === "Spotify",
                      "!text-[#FF0000] !bg-[#212121] hover:!border-[#FF0000]":
                        place === "Youtube Music",
                    }
                  )}
                >
                  {place === "Spotify" ? (
                    <i className="fa-brands fa-spotify text-2xl"></i>
                  ) : (
                    <i className="fa-solid fa-record-vinyl text-2xl"></i>
                  )}
                  <span className="text-white">{place}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {control ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-5"
            >
              {lyrics !== "" ? (
                <>
                  {loading ? (
                    <div className="h-14 px-2.5 bg-gray-500 bg-opacity-30 text-blue-200 text-xl font-medium flex items-center rounded-lg">
                      Searching for song lyrics...
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-8 bg-gray-600 bg-opacity-40 p-5 rounded-lg"
                    >
                      <div className="flex">
                        <h2 className="text-3xl text-gray-400 font-medium relative">
                          {songTitle} Lyrics{" "}
                          <div className="absolute w-full bg-blue-500 rounded-full left-0 h-[3px] -bottom-2"></div>
                        </h2>
                      </div>
                      <pre className="text-white">{lyrics}</pre>
                      <button
                        type="button"
                        onClick={() =>
                          (document.scrollingElement.scrollTop = 0)
                        }
                        className="border-2 border-solid border-white text-white rounded-full h-12 flex items-center justify-center hover:bg-white hover:text-black duration-300 text-lg font-medium mt-5 gap-2.5"
                      >
                        <span>Go Up</span>{" "}
                        <i className="fa-solid fa-arrow-up border-2 border-solid border-gray-600 w-8 h-8 flex items-center justify-center rounded-full"></i>
                      </button>
                    </motion.div>
                  )}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-2.5"
                >
                  <p className="text-gray-200 font-medium text-2xl">
                    Lyrics not found.
                  </p>
                  <p className="text-gray-400 font-medium text-lg">
                    Please make sure the artist name and lyrics are spelled
                    correctly.
                  </p>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col gap-2.5 mt-5"
            >
              {slogans.map((slogan, i) => (
                <div
                  key={i}
                  className="bg-blue-100 bg-opacity-20 text-white px-2.5 h-12 flex items-center gap-1.5 rounded-md"
                >
                  <i className="fa-regular fa-circle text-blue-500"></i>
                  <span>{slogan}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
