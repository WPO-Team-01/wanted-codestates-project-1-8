import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f2f2f2;
  margin: 15px 0;
  padding: 10px;
  border-radius: 5px;
`;

const CardTitle = styled.div`
  font-weight: bold;
  margin: 5px 0;
`;

const CardInfo = styled.p`
  margin: 5px 0;
`;

const SavedForestCard = ({ card }) => {
  console.log(card, card.fcNm);
  return (
    <CardContainer>
      <CardTitle>⛰ {card.fcNm}</CardTitle>
      <CardInfo>📪 {card.fcAddr}</CardInfo>
      <CardInfo>📞 {card.ref1}</CardInfo>
    </CardContainer>
  );
};

export default SavedForestCard;
