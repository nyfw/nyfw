import { Component } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

export default class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    portalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    portalRoot.remove(this.el);
  }
  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
