import * as React from 'react';

export const navigatioRef = React.createRef();

const navigate = (name) => {
    navigationRef.current?.navigate(name);
}

export default navigate;