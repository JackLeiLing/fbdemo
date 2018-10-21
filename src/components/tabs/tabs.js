import React, { Component } from 'react';
import './tabs.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Tabs extends Component {
    constructor(props) {
        super(props)
        const itemsVisibility = props.items.map((i) => false);
        this.state = {
            itemsVisibility: itemsVisibility
        }
    }
    render() {
        return (
            <div className="tabs">
                <div className="tabs__names">
                    {this.props.items.map((i, index) => {
                        let cssClass = this.state.itemsVisibility[index] === true ? `${i.color}` : "";
                        return <span
                            className={cssClass}
                            key={"tab" + i.name}
                            onClick={() => {
                                var updatedVisibility = this.state.itemsVisibility.map((i, num) => {
                                    return num === index ? !this.state.itemsVisibility[num] : this.state.itemsVisibility[num];
                                });
                                this.setState({ itemsVisibility: updatedVisibility });
                            }}
                        >
                            <i className="material-icons white">{i.icon}</i>
                        </span>
                    }
                    )}
                </div>
                {/* Tab Panels */}
                <div className="tabs__panels">
                    {this.props.items.map((i, index) => this.state.itemsVisibility[index] &&
                        <span
                            key={i.name}
                            className={i.color}
                        >
                            {i.content}
                        </span>
                    )}
                </div>

            </div>);
    }
}

export default Tabs;