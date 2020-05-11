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


    handleNotePlay(e) {
        const {value} = e.value
        console.log(value)
    }

    playDo() {
        this.synth.triggerAttackRelease('C4', '8n')
    }

    playRe() {
        this.synth.triggerAttackRelease('D4', '8n')
    }

    playMi() {
        this.synth.triggerAttackRelease('E4', '8n')
    }


    playFa() {
        this.synth.triggerAttackRelease('F4', '8n')
    }


    playSo() {
        this.synth.triggerAttackRelease('G4', '8n')
    }

    playLa() {
        this.synth.triggerAttackRelease('A4', '8n')
    }

    playTi() {
        this.synth.triggerAttackRelease('B4', '8n')
    }

    playDo2() {
        this.synth.triggerAttackRelease('C5', '8n')
    }

    render() {
        return <>

                <button onClick={e => this.playDo()}>DO</button>
                <button onClick={e => this.playRe()}>RE</button>
                <button onClick={e => this.playMi()}>MI</button>
                <button onClick={e => this.playFa()}>FA</button>
                <button onClick={e => this.playSo()}>SO</button>
                <button onClick={e => this.playLa()}>LA</button>
                <button onClick={e => this.playTi()}>TI</button>
                <button onClick={e => this.playDo2()}>DO</button>
        </>
    }
}