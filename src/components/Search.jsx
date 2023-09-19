import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

const Search = () => {
  const { register, getValues, setValue, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [isFocus, setIsFocus] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchSuggestionList] = useState([
    "Newton's Laws of Motion",
    "Supply and Demand",
    "Mitosis and Meiosis",
    "Oruko Amutorunwa",
    "World War II",
    "The Periodic Table",
  ]);
  const [matchedSearchList, setMatchedSearchList] = useState([]);
  const [preventListClose, setPreventListClose] = useState(false);

  const searchInputFocus = (payload) => {
    setIsFocus(payload);
  };

  const searchInput = (payload) => {
    setSearchText(payload);
  };

  const filterSearchList = () => {
    if (searchText === "") {
      setMatchedSearchList(searchSuggestionList);
    } else {
      const filteredList = searchSuggestionList.filter(
        (item) => item.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
      setMatchedSearchList(filteredList);
    }
  };

  const displayList = (payload) => {
    setPreventListClose(payload);
  };

  useEffect(() => {
    // MAKES MATCHED SEARCH LIST SAME AS SEARCH SUGGESTION LIST WHEN COMPONENT MOUNTS
    filterSearchList();
    // eslint-disable-next-line
  }, [searchText]);

  const submitForm = (data) => {};

  return (
    <section className="px-5 lg:px-8 xl:px-5 mx-auto w-full max-w-xl lg:max-w-7xl flex flex-row mt-8">
      <h2 className="sr-only">Search</h2>
      <AnimatePresence>
        <motion.div
          layout
          transition={{ type: "tween" }}
          className="relative w-full flex flex-col max-w-2xl mx-auto border border-gray rounded-md transition-all"
        >
          <form
            onSubmit={handleSubmit(submitForm)}
            onChange={() => {
              searchInput(getValues("search"));
            }}
            className="flex items-center w-full relative bg-white"
          >
            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              value={searchText}
              className="focus:outline-none w-full pl-6 h-14 rounded-md"
              placeholder="Enter key words"
              {...register("search", { required: true })}
              onFocus={() => searchInputFocus(true)}
              onBlur={() => {
                // ENSURE THE SEARCH SUGGESTION ARE NOT CLOSED WHEN CLICKED
                !preventListClose && searchInputFocus(false);
              }}
            />
            <button type="submit" className="mr-3 pt-1">
              <ion-icon
                name="search"
                role="img"
                className="md hydrated text-xl"
                aria-label="search"
              ></ion-icon>
              <span className="sr-only">search</span>
            </button>
          </form>
          <AnimatePresence>
            {isFocus && (
              <ul
                className="border-t border-gray bg-white w-full"
                // ALLOWS LIST ITEM TO BE CLICKED WHEN USER IS IN THE LIST
                onMouseEnter={() => displayList(true)}
                onMouseLeave={() => displayList(false)}
              >
                {matchedSearchList.map((item, index) => (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={index}
                    className="w-full p-4 hover:bg-very-light-gray transition-all flex cursor-pointer"
                    onClick={() => {
                      setValue("search", item);
                      searchInput(item);
                    }}
                  >
                    <ion-icon
                      name="search"
                      role="img"
                      className="md hydrated text-xl"
                      aria-label="search"
                    ></ion-icon>
                    <span className=" ml-3">{item}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Search;
