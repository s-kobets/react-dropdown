import React from 'react';
import {findDOMNode} from 'react-dom'
import {PropTypes} from 'prop-types'

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClickOutside)
  }

  handleClickOutside = (evt) => {
    const area = findDOMNode(this.area)

    if (!area || (area && !area.contains(evt.target))) {
      this.setState({
        isOpen: false,
      })
    }
  }

  render() {
    const { button, template } = this.props
    const { isOpen } = this.state
    const dropdownButtonActive = React.cloneElement(button,
      { 
        onClick: () => { this.setState({ isOpen: !isOpen }) },
        isClick: true,
      },
    )
    const dropdownButton = React.cloneElement(button,
      {
        onClick: () => { this.setState({ isOpen: !isOpen }) },
        isClick: false,
      },
    )

    return (
      <div
        ref={(name) => { this.area = name }}
      >
        { isOpen ? dropdownButtonActive : dropdownButton }
        {
          isOpen &&
          <div>
            {template}
          </div>
        }
      </div>
    )
  }
}

Dropdown.defaultProps = {
  button: <button>Toggle</button>,
  template: <div>Hello World</div>,
}

Dropdown.propTypes = {
  button: PropTypes.object.isRequired,
  template: PropTypes.object.isRequired,
}

export default Dropdown