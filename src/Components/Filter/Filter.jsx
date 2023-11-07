import {
  StyledInput,
  StyledLabel,
} from 'Components/ContactForm/ContactForm.styled.';
import { StyledFilterContainer } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filterData);
  const handleFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const dispatch = useDispatch();
  return (
    <StyledFilterContainer>
      <StyledLabel>Find contact by name</StyledLabel>
      <StyledInput
        type="text"
        value={filter}
        onChange={handleFilter}
      ></StyledInput>
    </StyledFilterContainer>
  );
};
