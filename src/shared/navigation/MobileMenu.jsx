import { Component } from 'react';
import ReactDOM from 'react-dom';
import { type } from 'os';

const modalRoot = typeof document !== 'undefined' ? document.getElementById('mobile-menu') : null;

class MobileMenu extends Component {

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
    if (modalRoot && this.el) {
      return ReactDOM.createPortal(
        this.props.children,
        this.el,
      );
    } else {
      return '';
    }
    
  }

}

export default MobileMenu;
