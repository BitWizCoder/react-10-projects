import React from "react";
import styled from "styled-components";

function RoleDice() {
  return (
    <DiceContainer>
      <div className="dice">
        <img src="/images/dice/dice_1.jpg" alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;

.dice {
    cursor: pointer;
}

  p {
    font-size: 24px;
  }
`;
