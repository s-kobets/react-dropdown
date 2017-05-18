import React from 'react';
import { findDOMNode } from 'react-dom'
import { PropTypes } from 'prop-types'
import styled from 'styled-components';

const WrapperDropdown = styled.div`
  position: relative;
  display: inline-block;
`

const OverlayDropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px)
  left: 0;
  display: inline-block;
  box-shadow: 0 0 0 1px rgb(0, 0, 0)
`

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.onClickOutside)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onClickOutside)
  }

  onClickOutside = (evt) => {
    const area = findDOMNode(this.area)

    if (!area || (area && !area.contains(evt.target))) {
      this.setState({
        isOpen: false,
      })
    }
  }

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { button, template } = this.props
    const { isOpen } = this.state

    const dropdownButton = React.cloneElement(button,
      {
        onClick: this.onClick,
        isClick: isOpen,
      },
    )

    return (
      <WrapperDropdown
        ref={(name) => { this.area = name }}
      >
        { dropdownButton }
        {
          isOpen &&
          <OverlayDropdown>
            {template}
          </OverlayDropdown>
        }
      </WrapperDropdown>
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