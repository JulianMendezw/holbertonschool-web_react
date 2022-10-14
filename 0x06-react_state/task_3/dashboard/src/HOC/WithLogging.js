import React from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLogging extends React.Component {}
  WithLogging.displayName = `WithLogging(${getDisplayname(WrappedComponent)})`;
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(`Component ${getDisplayname(WrappedComponent)} is mounted`)
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayname(WrappedComponent)} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}

function getDisplayname(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default WithLogging;
