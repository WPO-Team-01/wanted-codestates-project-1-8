import SavedForestCard from "./SavedForestCard";

const ForestLists = ({ myForestLists, setSelectedData }) => {
  return (
    <>
      {myForestLists.map((card, index) => (
        <SavedForestCard
          setSelectedData={setSelectedData}
          card={card}
          key={index}
        />
      ))}
    </>
  );
};

export default ForestLists;
