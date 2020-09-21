import styled from '@emotion/styled'

export const Paper = styled.div`
  background: url('/images/pieceofpaper.png');
  text-align: center;
  background-size: cover;
  height: auto;
  padding: 5vh 0;
`

export const Btn = styled.button`
  background: #47996d;
  border-radius: 40px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  color: #fbf3e0;
  font-size: 1.5rem;
  margin: 50px auto;
  margin-bottom: 20px;
  padding: 10px 50px;
  width: 70%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 30vw;
  }
`
