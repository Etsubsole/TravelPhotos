import styled from "styled-components";
import { Link } from "react-router-dom";
const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/logo.png" alt="" />
          
          <Description>
            YOU CAN SHARE <br/>All your travel memories for the rest of the world!!!
          </Description>
          <SignUp to='/signup'>LET'S IN</SignUp>
          
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  max-height: 300px;
  display: block;
  border-radius: 10px;
  &:hover{
    transform:scale(1.02);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border:#bebebe solid;

  }
 
`;

const SignUp = styled(Link)`
  font-weight: bold;
  color: #f9f9f9;
  background-color:#1d5c17;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 3px;
  font-size: 22px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 10px;
  text-decoration:none;
  &:hover {
    background-color: #27781f;
    cursor: pointer;
    border-radius: 20px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border:#bebebe solid;
  }
`;

const Description = styled.p`
font-weight: bold;
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;


export default Login;