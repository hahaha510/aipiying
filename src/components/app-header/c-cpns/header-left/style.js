import styled from "styled-components";
export const LeftWrapper=styled.div`
 flex:1;
 color:blue;
 .logo{
  cursor: pointer;
  margin-left: 30px;
  color: ${(props)=>props.theme.color.primaryColor};
 }
`