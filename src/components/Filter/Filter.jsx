import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilter } from '../../Redux/filter-selectors';

export const Filter = ({ onFilterChange }) => {
  const value = useSelector(getFilter);
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onFilterChange} />
    </label>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
