import React, {Component} from 'react';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, HeaderButton, SearchWrapper,
    SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem
} from "./style";
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreator} from './store';

class Header extends Component {
    getSearchInfo() {
        const {hotList, page, focused, mouse, totalPage} = this.props;
        const newList = hotList.toJS();
        const list = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                if (newList[i] !== undefined) {
                    list.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
                }

            }
        }
        if (focused || mouse) {
            return (<SearchInfo onMouseEnter={this.props.onMouseEnter}
                                onMouseLeave={this.props.onMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={() => this.props.onHotPageChange(page, totalPage, this.spin)}>
                        <i className={"iconfont spin"} ref={(icon) => {
                            this.spin = icon
                        }}>&#xe851;</i>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                    {list}
                </div>
            </SearchInfo>);
        } else {
            return null;
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className={"left active"}>首页</NavItem>
                    <NavItem className={"left"}>下载App</NavItem>
                    <NavItem className={"right"}>登录</NavItem>
                    <NavItem className={"right"}><i className={'iconfont zoom'}>&#xe602;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch className={this.props.focused ? 'focused' : ''}
                                       onFocus={() => this.props.onFocused(this.props.hotList)}
                                       onBlur={this.props.onBlured}/>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6cf;</i>
                        {this.getSearchInfo()}
                    </SearchWrapper>

                    <Addition>
                        <HeaderButton className={"writting"}>
                            <i className={'iconfont'}>&#xe603;</i>
                            写文章</HeaderButton>
                        <HeaderButton className={"red"}>注册</HeaderButton>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        // focused: state.get("header").get("focused")
        focused: state.getIn(["header", "focused"]),
        hotList: state.getIn(["header", "hotList"]),
        mouse: state.getIn(["header", "mouse"]),
        totalPage: state.getIn(["header", "totalPage"]),
        page: state.getIn(["header", "page"])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFocused(hotList) {
            (hotList.size === 0) && dispatch(actionCreator.getHotList());
            dispatch(actionCreator.inputFocus());
        },
        onBlured() {
            dispatch(actionCreator.inputBlur());
        },
        onMouseEnter() {
            dispatch(actionCreator.onMouseIn());
        },
        onMouseLeave() {
            dispatch(actionCreator.onMouseOut());
        },
        onHotPageChange(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, "");
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
            if (page < totalPage) {
                dispatch(actionCreator.onHotPageChange(page + 1));
            } else {
                dispatch(actionCreator.onHotPageChange(1));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
