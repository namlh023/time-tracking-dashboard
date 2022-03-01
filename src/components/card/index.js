import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import * as Helper from "../utils/Helpers.styled";

export default function Card({ item, periods }) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);

  useEffect(() => {
    Object.keys(periods).forEach(function (key) {
      if (periods[key] === true) {
        setCurrent(item["timeframes"][key]["current"]);
        setPrevious(item["timeframes"][key]["previous"]);
      }
    });
  }, [periods, item]);

  return (
    <Styled.StyledCard bgColor={item.bgColor} icon={item.icon}>
      <Styled.Body>
        <Helper.Flex>
          <ul>
            <li>
              <Helper.Flex>
                <p className="type">{item.title}</p>
                <p className="menu">...</p>
              </Helper.Flex>
            </li>
            <li>
              <Helper.Flex>
                <p className="time">{current}hrs</p>
                <p className="last-week">Last week - {previous}hrs</p>
              </Helper.Flex>
            </li>
          </ul>
        </Helper.Flex>
      </Styled.Body>
    </Styled.StyledCard>
  );
}
