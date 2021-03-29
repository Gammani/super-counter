import React from "react";
import {useHistory} from 'react-router-dom';
import {ControlPanel} from "./ControlPanel";
import {AppStateType} from "../redux/redux-store";
import {iteration, reset} from "../redux/counter-reducer";
import {connect} from "react-redux";

type MapStatePropsType = {
    startValue: number
    endValue: number
    counter: number
}
type MapDispatchToPropsType = {
    iteration: () => void
    reset: () => void
}
type PropsType = MapStatePropsType & MapDispatchToPropsType

const ControlPanelContainer: React.FC<PropsType> = (props) => {

    let history = useHistory();
    const redirectSettings = () => {
        history.push('/setting')
    }

    return (
        <ControlPanel {...props} redirectSettings={redirectSettings} />
    )
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    startValue: state.counter.startValue,
    endValue: state.counter.endValue,
    counter: state.counter.counter
});
const mapDispatchToProps: MapDispatchToPropsType = {
    iteration,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanelContainer);