// Hoc.js
import React from 'react';

const HOCuse = (originalCom) => {
    class Reusable extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }

        incrementCount = () => {
            this.setState((prevState) => {
                return { count: prevState.count + 1 };
            });
        };

        render() {
            return (
                <originalCom count={this.state.count} incrementCount={this.incrementCount} />
            );
        }
    }

    return Reusable;
};

export default HOCuse;