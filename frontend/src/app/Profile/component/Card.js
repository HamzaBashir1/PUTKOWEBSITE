import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, Icon, iconSize, customClasses }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${customClasses} 
      w-full h-44 lg:w-full lg:h-44 lg:pl-10 lg:pt-10
      sm:w-80 sm:h-40 sm:pl-6 sm:pt-6
      xs:w-64 xs:h-32 xs:pl-4 xs:pt-4`}
    >
      {Icon && <Icon className={`text-${iconSize} text-gray-700`} />}
      {title && (
        <h1 className="mt-5 text-lg font-bold text-gray-800">
          {title}
        </h1>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.elementType,
  iconSize: PropTypes.string,
  customClasses: PropTypes.string,
};

Card.defaultProps = {
  title: 'Reservation requests',
  Icon: null,
  iconSize: '2xl',
  customClasses: '',
};

export default Card;
