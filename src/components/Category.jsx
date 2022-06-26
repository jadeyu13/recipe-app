import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink}  from 'react-router-dom'


function Category() {
  return (
    <List>
        <SLink to={'/cuisine/italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/american'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>

        <SLink to={'/cuisine/japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink >
    </List>
  );
}

const List = styled.div`
    
    display: flex;
    justify-content:center;
    margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
    
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width:9rem;
height:9rem;
cursor: pointer;
transform: scale(.8);

h4{
    color: white;
    font-size: 1rem;
}

svg{
    color: white;
    font-size: 2rem;
}

&.active{
    background: linear-gradient(to right, #fa721e, #ed364f);
svg{
    color:white;
   
}
h4{
    color: white;
}
}

`

export default Category