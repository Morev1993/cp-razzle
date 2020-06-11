import { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = typeof document !== 'undefined' ? document.getElementById('message-overlay-container') : '';

class ModalMessageWrapper extends Component {

  constructor(props) {
    super(props);

    if (typeof document !== 'undefined') {
      this.el = document.createElement('div');
    }
  }

  componentDidMount() {
    if (modalRoot && this.el) {
      modalRoot.appendChild(this.el);

    }
  }

  componentWillUnmount() {
    if (modalRoot && this.el) {
      modalRoot.removeChild(this.el);
    }
  }

  render() {
    if (this.el) {
      return ReactDOM.createPortal(
        this.props.children,
        this.el,
      );
    } else {
      return '';
    }
    
  }

}

export default ModalMessageWrapper;
