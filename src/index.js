import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
const Botao = styled.button`
    background: blue;
    color:  white;
    font-size: 16px;
    margin: 1px;
    padding: 8px 16px;
    border: 0;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: bold;
    flex-basis: 100%;
    max-width: 200px;
`

const Paragrafo = styled.q`
    text-align: center;
    font-size: 22px;
    display: block;
    margin-bottom: 16px;
`;

const Wrapper = styled.div`
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export default class LeroList extends React.Component {
    state = {
        frase:''
    }

    componentDidMount() {
        this.componentLero()
    };
    

    componentLero() {
        axios.get('https://testapi.io/api/matheusrod92/lero-lero')
        .then(res => {
            const frases = res.data;
            const index = Math.floor(Math.random()* frases.length)
            this.setState({frase: frases[index], frases});
            console.log(this.state)
        })
    }

    callLero() {
        const {frases} = this.state
        const index = Math.floor(Math.random()* frases.length)
            this.setState({frase: frases[index]});
    }
    


    render () {
        const {frase} = this.state
        return (
            <Wrapper>
                <Paragrafo>{frase.frase}</Paragrafo>
                <Botao onClick={() => this.callLero()}>Lero Lero</Botao>
            </Wrapper>
        )
    }
}

ReactDOM.render(<LeroList/>, document.getElementById('root'))