import React, { Component } from 'react';
import './tabs.css';

class Tabs extends Component {
    constructor(props) {
        super(props)
        const itemsVisibility = props.items.map((i) => true);
        this.state = {
            itemsVisibility: itemsVisibility
        }
    }
    render() {
        return (
            <div className="tabs">
                <ul className="tabs_names">
                    {this.props.items.map((i, index) => <li
                        key={"tab" + i.name}
                        onClick={() => {
                            var updatedVisibility = this.state.itemsVisibility.map((i, num) => {
                                return num === index ? !this.state.itemsVisibility[num] : this.state.itemsVisibility[num];
                            });
                            this.setState({ itemsVisibility: updatedVisibility });
                        }}
                    >{i.name}</li>)}
                </ul>
                <ul className="tab-contents">
                    {this.props.items.map((i, index) => this.state.itemsVisibility[index] && <li key={"tab-content" + i.name}>{i.content}</li>)}
                </ul>
            </div>);
    }
}

export default Tabs;