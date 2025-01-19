import PropTypes from 'prop-types';

const ProfileButton = ({ fill = "currentColor", size = 24, onClick, ...props }) => {
  return (
    <button onClick={onClick} className="p-2 rounded-full hover:bg-gray-800 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 20 20"
        id="profile"
        {...props}
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g transform="translate(-180 -2159)">
            <g transform="translate(56 160)">
              <path
                d="M134 2009c-2.217 0-4.019-1.794-4.019-4s1.802-4 4.019-4 4.019 1.794 4.019 4-1.802 4-4.019 4m3.776.673a5.978 5.978 0 0 0 2.182-5.603c-.397-2.623-2.589-4.722-5.236-5.028-3.652-.423-6.75 2.407-6.75 5.958 0 1.89.88 3.574 2.252 4.673-3.372 1.261-5.834 4.222-6.22 8.218a1.012 1.012 0 0 0 1.004 1.109.99.99 0 0 0 .993-.891c.403-4.463 3.836-7.109 7.999-7.109s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218"
                fill={fill}
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
};

ProfileButton.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
};

export default ProfileButton;