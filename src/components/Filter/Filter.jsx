export const Filter = ({ value, onFilterChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onFilterChange} />
    </label>
  );
};
