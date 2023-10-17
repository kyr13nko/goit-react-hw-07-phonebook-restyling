import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { Input, Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onInput={onFilterChange} />
    </Label>
  );
};

export default Filter;
