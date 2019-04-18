import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
//npm i -S react-awesome-modal


class Purchasing extends Component {
    state = {name: this.props.name,
            birthTime:this.props.birthTime,
            generation:this.props.generation,
            price:this.props.price,
            visible: false
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() { 
        return (  
            <section>
                <h1> </h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <p>Creature Contents</p>
                        <h1>Creature Name: {this.state.name}</h1>
                        <h2>Birthday: {this.state.birthTime}</h2>
                        <h3>Generation: {this.state.generation}</h3>
                        <h4>Now : ${this.state.price}</h4>>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}
 
export default Purchasing;