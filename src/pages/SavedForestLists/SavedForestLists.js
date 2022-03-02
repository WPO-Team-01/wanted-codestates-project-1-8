import React from "react";
import SavedForestCard from "./SavedForestCard";

const ForestLists = ({ setModalOpen, myForestLists, setSelectedData }) => {
  return (
    <>
      {myForestLists.map((card, index) => (
        <SavedForestCard
          setModalOpen={setModalOpen}
          setSelectedData={setSelectedData}
          card={card}
          key={index}
        />
      ))}
    </>
  );
};

export default ForestLists;
