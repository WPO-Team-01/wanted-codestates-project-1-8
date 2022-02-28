import SavedForestCard from "./SavedForestCard";

const ForestLists = ({ list }) => {
  console.log(list);

  return (
    <>
      {list.map((card, index) => (
        <SavedForestCard card={card} key={index} />
      ))}
    </>
  );
};

export default ForestLists;
