import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="remote-error">
          <h2>{this.props.name} failed to load</h2>
          <p>
            The remote is fetched at runtime. Start it on its port, then refresh.
          </p>
          <p className="muted">{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
