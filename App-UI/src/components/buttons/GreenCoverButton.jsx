import styled from 'styled-components';
import PropTypes from 'prop-types';

const GreenCoverButton = ({ text, defaultColor = 'black', onClick }) => {
  return (
    <StyledWrapper defaultColor={defaultColor}>
      <button onClick={onClick}> 
        <span>{text}</span>
      </button>
    </StyledWrapper>
  );
}

// eslint-disable-next-line no-unused-vars
const StyledWrapper = styled(({ defaultColor, ...props }) => <div {...props} />)`
  button {
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.9rem 2rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 17px;
    border-radius: 500px;
    overflow: hidden;
    background: ${({ defaultColor }) => (defaultColor === 'black' ? '#000' : '#fff')};
    color: ${({ defaultColor }) => (defaultColor === 'black' ? '#fff' : '#000')};
    transition: background 0.3s ease, color 0.3s ease;
  }

  button span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
  }

  button:hover span {
    color: ${({ defaultColor }) => (defaultColor === 'black' ? '#000' : '#000')};
  }

  button::before,
  button::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  button::before {
    content: "";
    background: ${({ defaultColor }) => (defaultColor === 'black' ? '#000' : '#fff')};
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  button:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  button:hover {
    background: #66ff66;
    color: #fff;
  }

  @media (max-width: 768px) {
    button {
      padding: 0.8rem 1.5rem;
      font-size: 15px;  
    }
  }

  @media (max-width: 480px) {
    button {
      padding: 0.5rem 1rem;
      font-size: 13px;  
    }
  }
`;

GreenCoverButton.propTypes = {
  text: PropTypes.string.isRequired,
  defaultColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default GreenCoverButton;