import React from 'react';
import HOCuse from './Hoc'

class ClickCount extends React.Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Click {count} times</h2>
            </div>
        );
    }
}

export default HOCuse(ClickCount);