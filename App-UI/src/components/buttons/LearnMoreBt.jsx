import PropTypes from 'prop-types';
import styled from 'styled-components';

const LearnMoreBt = ({ mode = 'light', onClick }) => {
  return (
    <StyledWrapper mode={mode}>
      <button className="learn-more" onClick={onClick}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">Learn More</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  button.learn-more {
    width: 12rem;
    height: auto;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: ${({ mode }) => (mode === 'dark' ? '#282936' : '#f0f0f0')}; /* Dynamic background */
    border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: ${({ mode }) => (mode === 'dark' ? '#f0f0f0' : '#282936')}; /* Dynamic icon color */
  }

  button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid ${({ mode }) => (mode === 'dark' ? '#f0f0f0' : '#282936')}; /* Dynamic arrow color */
    border-right: 0.125rem solid ${({ mode }) => (mode === 'dark' ? '#f0f0f0' : '#282936')};
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: ${({ mode }) => (mode === 'dark' ? '#f0f0f0' : '#282936')}; /* Dynamic text color */
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
  }

  button:hover .circle .icon.arrow {
    background: ${({ mode }) => (mode === 'dark' ? '#f0f0f0' : '#282936')};
    transform: translate(1rem, 0);
  }

  button:hover .button-text {
    color: ${({ mode }) => (mode === 'dark' ? '#f0f0f0' : '#282936')}; /* Flip text color on hover */
  }
`;
LearnMoreBt.propTypes = {
  mode: PropTypes.string,
  onClick: PropTypes.func,
};

export default LearnMoreBt;