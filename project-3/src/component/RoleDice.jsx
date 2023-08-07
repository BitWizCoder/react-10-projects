import styled from "styled-components";

function RoleDice({ roleDice, currentDice }) {


  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.jpg`} alt="" />
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
