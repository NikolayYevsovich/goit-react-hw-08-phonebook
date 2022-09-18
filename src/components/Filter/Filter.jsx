import PropTypes from 'prop-types';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onFilterChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
