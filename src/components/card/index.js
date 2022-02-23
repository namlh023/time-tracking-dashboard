import React from "react";
import * as S from "./styled";
import * as Helper from "../utils/helpers.styled";

export default function Card({
  item: {
    title,
    timeframes: {
      daily: { current, previous },
    },
  },
}) {
  return (
    <S.styledCard>
      {/* <S.Header></S.Header> */}
      <S.Body>
        <Helper.Flex>
          <ul>
            <li>
              <Helper.Flex>
                <p>{title}</p>
                <p>...</p>
              </Helper.Flex>
            </li>
            <li>
              <Helper.Flex>
                <p>{current}hrs</p>
                <p>Last week - {previous}hrs</p>
              </Helper.Flex>
            </li>
          </ul>
        </Helper.Flex>
      </S.Body>
    </S.styledCard>
  );
}
