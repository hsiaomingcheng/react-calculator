import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { value, buttonColor } = this.props;

    return (
      <ButtonsContainer backgroundColor={buttonColor}>
        {value}
      </ButtonsContainer>
    );
  }
}

// 指定 props 的默认值：
Buttons.defaultProps = {
  buttonColor: '#f1f3f4',
};

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
};

export default Buttons;

const ButtonsContainer = styled.div`
    background-color: ${(props) => props.backgroundColor};
    cursor: pointer;
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
