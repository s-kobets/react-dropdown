import React from 'react';
import onClickOutside from 'react-onclickoutside'
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

const ComponentOverlay = (props) => (
  <OverlayDropdown>
    {props.overlay}
  </OverlayDropdown>
)

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
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
        active: isOpen,
      },
    )

    const Outside = onClickOutside(ComponentOverlay, {
      handleClickOutside: () => this.onClick,
    })

    return (
      <WrapperDropdown>
        { dropdownButton }
        { isOpen &&
          <Outside
            eventTypes="click"
            overlay={template}
          />
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