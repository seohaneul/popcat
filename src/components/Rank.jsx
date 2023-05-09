import React, { useState } from "react";
import styled from "styled-components";
import Korea from "../assets/image/korea.svg";
import Japan from "../assets/image/japan.svg";
import Usa from "../assets/image/usa.svg";

export default function Rank(count) {
  const [countNum, setCountNum] = useState(0);
  const [menu, setMenu] = useState(false);
  const clickRank = () => {
    if (menu === true) {
      setMenu(!menu);
    } else {
      setCountNum(count.count);
      setMenu(true);
    }
  };

  return (
    <div>
      <Box method="post" onClick={clickRank}>
        🏆
      </Box>
      {menu ? (
        <RankList>
          <RankBox onClick={clickRank}>
            <ul>
              <li>
                <div>🥇</div>
                <p>
                  <img src={Korea} alt="korea" />
                  {countNum}
                </p>
              </li>
              <li>
                <div>🥈</div>
                <p>
                  <img src={Usa} alt="Usa" />
                  {countNum-10}
                </p>
              </li>
              <li>
                <div>🥉</div>
                <p>
                  <img src={Japan} alt="Japan" />
                  {countNum-20}
                </p>
              </li>
            </ul>
          </RankBox>
        </RankList>
      ) : (
        ""
      )}
    </div>
  );
}

const Box = styled.div`
  font-size: 30px;
`;

const RankBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  > ul {
    width: 50%;
    > li {
      padding: 0 10px 0 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #000;
      height: 50px;
      > div {
        padding-right: 5px;
        line-height: 25px;
      }
      > p {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > img {
          width: 25px;
          border-radius: 5px;
          filter: drop-shadow(1px 1px 1px rgba(0 0 0 /0.5));
        }
      }
    }
  }
`;

const RankList = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 150px;
  border-radius: 0 0 10px 0;
  background-color: #fff;
`;