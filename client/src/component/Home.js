
import styled from 'styled-components';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import SideBar from './SideBar';

const Home = (props) =>{
    return(
       <Container>
        <TinderCards/>
        <SwipeButtons/>
        <SideBar/>
       </Container>
    )
}
const Container = styled.div``;
export default Home;