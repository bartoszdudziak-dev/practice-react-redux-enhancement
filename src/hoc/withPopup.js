import React from "react";

class Overlay extends React.Component {
  style = {
    position: "fixed",
    inset: 0,
    backdropFilter: "blur(5px)",
  };

  render() {
    const { children } = this.props;

    return <div style={this.style}>{children}</div>;
  }
}

class Popup extends React.Component {
  style = {
    position: "absolute",
    left: "50%",
    top: "25%",
    background: "white",
    boxShadow: "2px 2px 10px rgba(0,0,0, 0.2)",
    transform: "translate(-50%, -50%)",
    padding: "2rem 4rem",
  };

  render() {
    const { children, onClose, style } = this.props;

    return (
      <Overlay>
        <div style={{ ...this.style, ...style }}>
          <button
            onClick={onClose}
            style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
          >
            Close
          </button>
          {children}
        </div>
      </Overlay>
    );
  }
}

const withPopup = (WrappedComponent, style = null) =>
  class extends React.Component {
    state = {
      isOpen: true,
    };

    handleClose = () => {
      this.setState({ isOpen: false });
    };

    render() {
      const { isOpen } = this.state;

      if (isOpen) {
        return (
          <Popup style={style} onClose={this.handleClose}>
            <WrappedComponent />
          </Popup>
        );
      }

      return <WrappedComponent />;
    }
  };

export default withPopup;
