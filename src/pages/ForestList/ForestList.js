import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const SearchInput = styled.input``;

const SelectBox = styled.select``;

const OptionBox = styled.option``;

const ListContainer = styled.div``;

const List = styled.div`
  background-color: #f3f3f3;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
`;

const Title = styled.div`
  font-weight: bold;
  margin: 5px 0;
`;

const Content = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const ForestList = () => {
  //const [infos, getInfos] = useState([]);

  // const GetForestList = fetch(
  //   `https://cors-anywhere.herokuapp.com/https://www.chungbuk.go.kr/openapi-json/pubdata/pubMapForest.do`
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(JSON.parse(data)));

  const Data = [
    {
      fcNm: "계명산자연휴양림",
      fcAddr: "충청북도 충주시 충주호수로 1170",
      ref1: "043-840-7930",
    },
    {
      fcNm: "속리산휴양림",
      fcAddr: "충청북도 보은군 속리산면 속리산로 596",
      ref1: "043-540-3220",
    },
  ];
  return (
    <div>
      <Container>
        <SelectBox>
          <OptionBox></OptionBox>
          <OptionBox>메모</OptionBox>
        </SelectBox>
        <SearchInput placeholder="검색어를 입력해주세요" />
      </Container>
      <ListContainer>
        <List>
          <Title>{Data.fcNm}속리산</Title>
          <Content>충청북도 보은군 속리산면 속리산로 596</Content>
          <Content>043-540-3220</Content>
          <Content>추울 때 가야 좋은 곳</Content>
        </List>
      </ListContainer>
    </div>
  );
};

export default ForestList;
