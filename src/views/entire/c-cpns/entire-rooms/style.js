import styled from "styled-components";
export const EntireRoomsWrapper=styled.div`
position: relative;
  padding: 40px 40px;
  .title{
    margin: 0 0 10px 10px;
    font-size: 22px;
    font-weight: 700;
    color: #222;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
  }
  > .cover{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8)
  }
`