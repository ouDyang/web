import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    overflow:hidden;
    margin:0 auto;
`;

export const HomeLeft = styled.div`
    width:625px;
    float:left;
    margin-right:15px;
    padding-top:30px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    cursor:pointer;
    float:left;
    background:#f7f7f7;
    padding-right:10px;
    margin-right:18px;
    height:32px;
    line-height:32px;
    font-size:14px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-bottom:18px;
    .topic-pic{
        width:32px;
        height:32px;
        float:left;
        display:block;
        margin-right:10px;
        border-radius:4px;
    }
`;

export const TopicMore = styled.a`
    display:inline-block;
    color:#787878;
    margin-top:10px;
    font-size:14px;
    cursor:pointer;
`;

export const HomeListWrapper = styled.div`
    box-sizing;border-box;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .list_img{
        border-radius:10px;
        width:125px;
        height:100px;
        display:block;
        float:right;
    }
`;

export const HomeListItem = styled.div`
    width:500px;
    float:left;
   .title{
        font-size:18px;
        color:#333;
        line-height:27px;
        font-widget:bold;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;
        padding-right:10px;
    }
`;

export const HomeListItemBottom = styled.div`
    height:20px;
    width:480px;
    float:left;
    font-size:12px;
    color:#b7b7b7;
    padding-top:20px;
    .author{
        text-decoration:none;
        cursor:pointer;
    }
    .icon{
        width:12px;
        height:13px;
        margin-right:6px;
        margin-left:18px;
    }
`;

export const RecommendWrapper = styled.div`
    width:280px;
    margin:30px 0;
`;

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    margin:0 0 4px 0;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`;

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align: center;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;
`;