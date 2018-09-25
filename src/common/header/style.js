import styled from 'styled-components';
import logo from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
   position: relative;
   height: 58px;
   min-width: 768px;
   max-width: 1440px;
   margin: 0 auto;
   border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({href: "/"})`
   position : absolute;
   top:0;
   left:0;
   height:58px;
   margin-left:50px;
   display:block;
   width:100px;
   background: url(${logo});
   background-size:contain;
`;

export const Nav = styled.div`
  width:960px;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border_box;
  height:100%
`;

export const NavItem = styled.div`
     padding:0 15px;
     font-size:17px;
     color:#333;
     line-height:56px;
     &.left{
         float:left;
     }
     &.active{
        color:#ea6f5a;
     }
     &.right{
         float:right;
         font-size:15px;
        color:#969696;
     }
`;
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    
    .zoom{
        position:absolute;
        border-radius:15px;
        bottom:5px;
        right:5px;
        width:30px;
        line-height:30px;
        text-align:center;
        &.focused{
          background:#777;
          color:#fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({placeholder: "搜索"})`
    width:160px;
    height:38px;
    padding:0 20px 0px 20px;
    margin-left:20px;
    margin-top:9px;
    box-sizing:border-box;
    background:#eee;
    border:none;
    outline:none;
    border-radius:19px;
    font-size:14px;
    &..placeholder{
      color:#999;
    }
    &.focused{
        width:200px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:200px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const HeaderButton = styled.div`
    border:1px solid #ec6149;
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    &.red{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`;

export const SearchInfo = styled.div`
    background:#fff;
    position:absolute;
    width:200px;
    top:56px;
    left:0;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    font-size:14px;
    line-height:20px;
    color:#969696;
`;

export const SearchInfoSwitch = styled.span`
    font-size:13px;
    float:right;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin_right:4px;
        transition:all .2s ease-in;
        transform:rotate(0deg);
        transform-origin:center center;
    }
`;

export const SearchInfoItem  = styled.a`
    display:block;
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    border-radius:3px;
    margin-right:10px;
    margin-bottom:10px;
    float:left;
    color:#787878;
`;