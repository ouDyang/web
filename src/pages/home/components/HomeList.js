import React, {Component} from 'react';
import {HomeListWrapper, HomeListItem, HomeListItemBottom, LoadMore} from "../style";
import {connect} from 'react-redux';

class HomeList extends Component {
    render() {
        const {homeList, loadMore} = this.props;
        return (
            <div>
                {
                    homeList.map((item) => {
                        return (
                            <HomeListWrapper key={item.get("id")}>
                                <img alt={""} className={"list_img"} src={item.get("imgUrl")}/>
                                <HomeListItem>
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className={"desc"}>{item.get("desc")}</p>
                                </HomeListItem>
                                <HomeListItemBottom>
                                    <a className={"author"}>虞美人</a>
                                    <a>
                                        <i className={"iconfont icon"}>&#xe600;</i>
                                        1
                                    </a>
                                    <i className={"iconffont icon"}>&#xe601;</i>
                                    50
                                </HomeListItemBottom>
                            </HomeListWrapper>
                        )
                    })
                }
                <LoadMore onClick={() => loadMore()}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    homeList: state.getIn(["home", "homeList"])
});

const mapDispatch = (dispatch) => {
    return {
        loadMore() {

        }
    }

};

export default connect(mapState, mapDispatch())(HomeList);