import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../Redux/Filter/filter-selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ onFilterChange }) => {
  const value = useSelector(selectFilter);
  return (
    <FilterLabel>
      <FilterInput
        type="text"
        value={value}
        onChange={onFilterChange}
        placeholder="Find contacts by name"
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
