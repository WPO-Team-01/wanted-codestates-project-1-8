import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f2f2f2;
  margin: 15px 0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const CardTitle = styled.div`
  font-weight: bold;
  margin: 5px 0;
`;

const CardInfo = styled.p`
  margin: 5px 0;
`;

const SavedForestCard = ({ card, setSelectedData }) => {
  return (
    <CardContainer onClick={() => setSelectedData(card)}>
      <CardTitle>⛰ {card.name}</CardTitle>
      <CardInfo>📪 {card.address}</CardInfo>
      <CardInfo>📞 {card.phoneNum}</CardInfo>
      {card.memo && <CardInfo>📒 {card.memo}</CardInfo>}
    </CardContainer>
  );
};

export default SavedForestCard;
