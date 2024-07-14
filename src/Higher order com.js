import React from 'react';
import HOCuse from './Hoc'

class HigherOrder extends React.Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button onClick={incrementCount}>Click {count} times</button>
            </div>
        );
    }
}

export default HOCuse(HigherOrder);