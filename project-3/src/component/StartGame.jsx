import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.jpg" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: white;
  min-width: 220px;
  font-size: 15px;
  border: 2px solid #000;
  transition: 0.4s background ease-in;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #000;
    transition: 0.3s background ease-in;
  }
`;
