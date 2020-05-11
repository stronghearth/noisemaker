import React, {Component} from 'react';
import * as Tone from 'tone';
import './Noisemaker.css';

export default class Noisemaker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noiseActive: false
        }
        this.synth = new Tone.Synth().toMaster();
    }


    makeNoiseActive() {
        this.synth.triggerAttackRelease('C4', 1)
    }

    render() {
        const {noiseActive} = this.state
        return <>
                
                <button disabled={noiseActive} onClick={e => this.makeNoiseActive()}></button>
        </>
    }
}