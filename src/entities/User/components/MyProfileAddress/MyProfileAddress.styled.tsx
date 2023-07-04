import styled from "@emotion/styled";

export const AddressBlock = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

overflow: hidden;
padding: 15px;
`;

export const AdressNotAddCount = styled.h5`
margin: 7px;
padding: 5px;
`;

export const UpdateButton = styled.button`
width: 200px;
height: 30px;
margin: 5px;

background-color: rgba(226, 198, 198, 0.50);
color: #4f145e; 

border-color: #4f145e; 
border-radius: 7px;

padding: 5px;

:hover{
    background-color: #4f145e;
    color: white;
  }
`;

