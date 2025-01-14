import styled from "styled-components"
export const EntirePaginationWrapper=styled.div`
    display: flex;
    justify-content: center;
    .info{
      display: flex;
      flex-direction: column;
      align-items: center;
      .ant-pagination-item-active{
        background-color: skyblue;
        border-color: #222;
        & a{
          color: #fff;
        }
      }
      .desc{
        margin-top: 10px;
        font-weight: 700;
      }
    }
`