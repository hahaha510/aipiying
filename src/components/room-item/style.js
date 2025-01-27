import styled from "styled-components";

export const RoomWrapper=styled.div`
  width: ${props=>props.itemwidth};
  padding: 8px;
  flex-shrink: 0;
  box-sizing: border-box;
  .inner{
    width: 100%;
  }
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .swpier{
    position: relative;
    cursor: pointer;
    &:hover{
      .control{
        display: flex;
      }
    }
    .control{
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      justify-content: space-between;
      bottom: 0;
      color: #fff;
      .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left,transparent 0%,rgba(0,0,0,0.25) 100%);
        &.right{
          background: linear-gradient(to right,transparent 0%,rgba(0,0,0,0.25) 100%);
        }
      }
    }
    .indicator{
      position: absolute;
      bottom: 10px;
      width: 30%;
      z-index: 9;
      left: 0;
      right: 0;
      margin: 0 auto;
      .item{
       display :flex ;
       justify-content: center;
       align-items: center;
       width: 20%;
       .dot{
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;
        &.active{
          width: 8px;
          height: 8px;
          background-color: #fff;
        }
       }
      }
    }
  }
    
  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifycolor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    color: #484848;
    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }
  .bottom{
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 5px 0 10px;
    }
    .anticon-star{
      margin-right: -10px;
    }
  }
`