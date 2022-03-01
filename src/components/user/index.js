import React from "react";
import classNames from "classnames";

import * as Styled from "./styled";
import * as Helper from "../utils/Helpers.styled";
import imgUser from "../../assets/images/image-jeremy.png";

export default function User({ periods, setPeriods }) {
  function setActivePeriod(period) {
    const periodsCopy = { ...periods };

    if (periodsCopy.period === true) return;

    // Set all values to false, except period
    Object.keys(periodsCopy).forEach(function (key) {
      if (key === period) {
        periodsCopy[key] = true;
      } else {
        periodsCopy[key] = false;
      }
    });

    setPeriods(periodsCopy);
  }
  return (
    <Styled.StyledUser>
      <Styled.UserInfo>
        <Helper.Flex justifyContent="flex-start" gap="1rem">
          <div>
            <img src={imgUser} alt="" aria-hidden="true" />
          </div>
          <div>
            <p className="des">Report for</p>
            <p className="username">Jeremy Robson</p>
          </div>
        </Helper.Flex>
      </Styled.UserInfo>

      <Helper.Flex justifyContent="space-evenly">
        <Styled.Button
          onClick={() => setActivePeriod("daily")}
          className={classNames({ active: periods.daily })}
        >
          Daily
        </Styled.Button>
        <Styled.Button
          onClick={() => setActivePeriod("weekly")}
          className={classNames({ active: periods.weekly })}
        >
          Weekly
        </Styled.Button>
        <Styled.Button
          onClick={() => setActivePeriod("monthly")}
          className={classNames({ active: periods.monthly })}
        >
          Monthly
        </Styled.Button>
      </Helper.Flex>
    </Styled.StyledUser>
  );
}
