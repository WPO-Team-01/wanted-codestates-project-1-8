import SavedForestCard from "./SavedForestCard";

const ForestLists = ({ myForestLists }) => {
  console.log(myForestLists);

  return (
    <>
      {myForestLists.map((card, index) => (
        <SavedForestCard card={card} key={index} />
      ))}
    </>
  );
};

export default ForestLists;
