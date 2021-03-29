import React, {useCallback, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {Setting} from "./Setting";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {errorHandler, onChangeEndValue, onChangeStartValue, setCounter} from "../redux/counter-reducer";

type MapStateToPropsType = {
    startValue: number
    endValue: number
    error: string
}
type MapDispatchToPropsType = {
    onChangeStartValue: (value: number) => void
    onChangeEndValue: (value: number) => void
    errorHandler: () => void
    setCounter: (value: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const SettingContainer: React.FC<PropsType> = (props) => {

    let history = useHistory();
    const redirectControlPanel = () => {
        props.setCounter(props.startValue);
        history.push('/controlPanel');
    }

    const errorHandler = useCallback(() => {
        props.errorHandler();
    }, [props.startValue, props.endValue]);
    useEffect(() => {
        errorHandler();
    }, [props.endValue, props.startValue, errorHandler])


    return (
        <Setting {...props} redirectControlPanel={redirectControlPanel}/>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    startValue: state.counter.startValue,
    endValue: state.counter.endValue,
    error: state.counter.error
});
const mapDispatchToProps: MapDispatchToPropsType = {
    errorHandler,
    onChangeEndValue,
    onChangeStartValue,
    setCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);