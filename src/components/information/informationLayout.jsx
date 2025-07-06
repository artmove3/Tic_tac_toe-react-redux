import PropTypes from 'prop-types';

export const InformationLayout = ({ defineInfo }) => {
	return <div>{defineInfo()}</div>;
};

InformationLayout.propTypes = {
	defineInfo: PropTypes.func,
};
