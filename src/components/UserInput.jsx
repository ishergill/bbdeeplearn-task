import React, { useState } from "react";

const UserInput = ({ onSubmit }) => {
  // *states to show hide dropdown
  const [showFantasySetting, setFantasySetting] = useState(false);
  const [showMagicalCreature, setMagicalCreature] = useState(false);

  // *states to add input to main data objext
  const [userName, setUserName] = useState("");
  const [fantasySelected, setFantasySelected] = useState("Medieval");
  const [selectedCreature, setSelectedCreature] = useState("Dragons");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (
      !userName?.trim()?.length ||
      !fantasySelected?.trim()?.length ||
      !selectedCreature?.trim()?.length
    ) {
      alert("Please fill all the required values");
      return;
    }

    // Construct the story message with promt
    let storyMessage = `Embark on a journey into the realms of storytelling and fantasy with ${userName}. Imagine yourself transported to a ${fantasySelected} where ancient castles stand tall against the horizon, and magic crackles in the air like static electricity. Amongst the misty forests and sprawling plains, ${userName} encounters their favorite magical creature or element, ${selectedCreature}. But this encounter is merely the beginning of an epic tale waiting to unfold. Dive into the depths of imagination and let the story weave its spell around you, as you discover the true essence of storytelling and fantasy.`;

    onSubmit(storyMessage);
  };

  return (
    <div className="container m-auto h-[100vh] flex flex-col justify-center ">
      <h2 className=" font-serif text-3xl font-[500] text-white py-4 mb-4">
        The Enchanted Storyteller
      </h2>
      <form onSubmit={handleSubmit} className="mb-2 ">
        <div className="flex md:flex-row flex-col gap-6 justify-center items-center ">
          <input
            type="text"
            id="textInput"
            name="textInput"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="py-2 px-4  border rounded-md  w-[80%] md:w-fit"
            placeholder="Name.."
          />
          <div className="relative inline-block text-left w-[80%] md:w-fit">
            <div>
              <span className="rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 "
                  onClick={() => setFantasySetting((prev) => !prev)}
                >
                  Fantasy
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
              </span>
            </div>
            {showFantasySetting ? (
              <div className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => {
                      setFantasySelected("Medieval")
                      setFantasySetting((prev)=>!prev);

                    }}
                  >
                    Medieval
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => {
                      setFantasySelected("Mythological")
                      setFantasySetting((prev)=>!prev);
                    
                    }}
                  >
                    Mythological
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => {
                      setFantasySelected("Futuristic")
                      setFantasySetting((prev)=>!prev);
                    }
                    }
                  >
                    Futuristic
                  </a>
                  <input
                    type="text"
                    placeholder="custom fantasy..."
                    value={fantasySelected}
                    className="block w-full px-4 py-2 text-sm text-gray-900 bg-slate-400 "
                    role="menuitem"
                    onChange={(e) => setFantasySelected(e.target.value)}
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div className="relative inline-block text-left  w-[80%] md:w-fit">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 whitespace-nowrap"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setMagicalCreature((prev) => !prev)}
              >
                Magical Creature
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z" />
                </svg>
              </button>
            </div>
            {showMagicalCreature ? (
              <div
                className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => {
                      setSelectedCreature("Dragons");
                      setMagicalCreature((prev) => !prev);
                    }}
                  >
                    Dragons
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                    role="menuitem"
                    onClick={() => {
                      setSelectedCreature("Spells");
                      setMagicalCreature((prev) => !prev);
                    }}
                  >
                    Spells
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 whitespace-nowrap"
                    role="menuitem"
                    onClick={() => {
                      setSelectedCreature("Enchanted Objects");
                      setMagicalCreature((prev) => !prev);
                    }}
                  >
                    Enchanted Objects
                  </a>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 text-sm text-gray-700 border-t border-gray-200 bg-slate-400"
                    role="menuitem"
                    value={selectedCreature}
                    placeholder="custom creature..."
                    onChange={(e) => setSelectedCreature(e.target.value)}
                  />
                </div>
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600  py-2 px-4  text-white font-semibold rounded  w-[80%] md:w-fit"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
