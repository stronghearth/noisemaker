import React, {Component} from 'react';
import * as Tone from 'tone';
import './Noisemaker.css';

export default class Noisemaker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doe: null,
            re: null,
            mi: null,
            fa: null,
            so: null,
            la: null,
            ti: null,
            doTwo: null
        }
        this.synth = new Tone.Synth().toMaster();
    }

    playDo() {
        this.synth.triggerAttackRelease('C4', '8n')
        this.setState({
            doe: 'C',
        })
    }

    playRe() {
        this.synth.triggerAttackRelease('D4', '8n')
        this.setState({
            re: 'D',
        })
    }

    playMi() {
        this.synth.triggerAttackRelease('E4', '8n')
        this.setState({
            mi: 'E',
        })
    }


    playFa() {
        this.synth.triggerAttackRelease('F4', '8n')
        this.setState({
            fa: 'F',
        })
    }


    playSo() {
        this.synth.triggerAttackRelease('G4', '8n')
        this.setState({
            so: 'G',
        })
    }

    playLa() {
        this.synth.triggerAttackRelease('A4', '8n')
        this.setState({
            la: 'A',
        })
    }

    playTi() {
        this.synth.triggerAttackRelease('B4', '8n')
        this.setState({
            ti: 'B',
        })
    }

    playDo2() {
        this.synth.triggerAttackRelease('C5', '8n')
        this.setState({
            doTwo: 'C'
        })
    }

    resetNotes() {
        this.setState({
            doe: null,
            re: null,
            mi: null,
            fa: null,
            so: null,
            la: null,
            ti: null,
            doTwo: null
        })
    }

    render() {
        const {doe, re, mi, fa, so, la, ti, doTwo} = this.state 
        return <>
        <button className="reset" onClick={e => this.resetNotes()}>Reset</button>
        <section className="xylophone">
                    <button className="keys doKey" onClick={e => this.playDo()}>{doe ? doe : 'DO'}</button>
                    <button className="keys reKey" onClick={e => this.playRe()}>{re ? re : 'RE'}</button>
                    <button className="keys miKey" onClick={e => this.playMi()}>{mi ? mi : 'MI'}</button>
                    <button className="keys faKey" onClick={e => this.playFa()}>{fa ? fa : 'FA'}</button>
                    <button className="keys soKey" onClick={e => this.playSo()}>{so ? so : 'SO'}</button>
                    <button className="keys laKey" onClick={e => this.playLa()}>{la ? la : 'LA'}</button>
                    <button className="keys tiKey" onClick={e => this.playTi()}>{ti ? ti : 'TI'}</button>
                    <button className="keys doKeyTwo" onClick={e => this.playDo2()}>{doTwo ? doTwo : 'DO'}</button>
        </section>
        
        </>
    }
}