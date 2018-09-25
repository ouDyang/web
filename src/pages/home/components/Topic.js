import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper, TopicItem, TopicMore} from "../style";

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item) => {
                        return (<TopicItem key={item.get("id")}>
                            <img className={"topic-pic"} alt={""}
                                 src={item.get("imgUrl")}/>
                            {item.get("title")}
                        </TopicItem>)
                    })
                }
                <TopicMore>
                    更多热门专题>
                </TopicMore>
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    topicList: state.getIn(["home", "topicList"])
});

export default connect(mapState, null)(Topic);