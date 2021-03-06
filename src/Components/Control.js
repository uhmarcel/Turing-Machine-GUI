import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt, faArrowLeft, faArrowRight, faPlay, faPause, faFastForward } from '@fortawesome/free-solid-svg-icons';
import ProgramDropdown from './Subcomponents/ProgramDropdown';

import '../Css/Control.css';


class Control extends Component {

    state = {
        play: null
    }

    simulationReset = async () => {
        const {TM, updateTM} = this.props;
        this.stopSimulation();
        TM.resetTape();
        TM.setInput(TM.input);
        updateTM();
    }

    simulationBack = async () => {
        const {TM, updateTM} = this.props;
        this.stopSimulation();
        TM.stepBack();
        updateTM();
    }

    simulationStep = async () => {
        const {TM, program, updateTM} = this.props;
        if (TM.isDone())
            this.stopSimulation();
        TM.step(program);
        updateTM();
    } 

    simulationPlay = async () => {
        let {play} = this.state;
        if (play === null) {
            play = setInterval(this.simulationStep, 200);
        }
        else {
            clearInterval(play);
            play = null;
        }
        this.setState({play});
    }

    simulationFastforward = async () => {
        const {TM, program, updateTM} = this.props;
        this.stopSimulation();
        while (!TM.isDone()) {
            TM.step(program);
        }
        updateTM();
    }

    stopSimulation = async () => {
        const {play} = this.state;
        if (play !== null) {
            clearInterval(play);
            this.setState({play: null});
        }
    }

    getPlayIcon = () => {
        const {play} = this.state;
        return play ? faPause : faPlay;
    }

    getPlayStyle = () => {
        const {play} = this.state;
        return play ? {} : {paddingLeft:'8px'};
    }

    render() {
        const playIcon = this.getPlayIcon();
        return (
            <div className='container-fluid ControlPanel'>
                <ProgramDropdown 
                    className='float-left'
                    onSelection={this.props.onProgramSelection}
                />
                <div className='EditorMsg'>Editor</div>
                <div className='float-right'>
                    <Button color='light' className='ControlButton' onClick={this.simulationReset}><FontAwesomeIcon icon={faUndoAlt}/></Button>{'  '}
                    <Button color='light' className='ControlButton' onClick={this.simulationBack}><FontAwesomeIcon icon={faArrowLeft}/></Button>{'  '}
                    <Button color='light' className='ControlButton' onClick={this.simulationStep}><FontAwesomeIcon icon={faArrowRight}/></Button>{'  '}
                    <Button color='light' className='ControlButton' onClick={this.simulationPlay} style={this.getPlayStyle()}><FontAwesomeIcon icon={playIcon} style={{height: '15px'}}/></Button>{'  '}
                    <Button color='light' className='ControlButton' onClick={this.simulationFastforward}><FontAwesomeIcon icon={faFastForward}/></Button>    
                </div>
            </div>
        );
    }

    

}

export default Control;