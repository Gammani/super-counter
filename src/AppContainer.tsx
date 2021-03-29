import React from "react";
import App from "./App";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";

type MapDispatchToPropsType = {}
type MapStateToPropsType = {
    startValue: number
    endValue: number
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const AppContainer = (props: PropsType) => {
    return (
        <App {...props}/>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    startValue: state.counter.startValue,
    endValue: state.counter.endValue
});
const mapDispatoPropsType = {}

export default connect(mapStateToProps, mapDispatoPropsType)(AppContainer)
