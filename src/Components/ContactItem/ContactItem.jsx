import { StyledFilterButton } from 'Components/Filter/Filter.styled';
import { StyledContactItemLi } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'Components/Loader/Loader';

import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';

export const ContactIem = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [deleteContact, result] = useDeleteContactMutation();

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      {contacts &&
        contacts.map(({ name, number, id }) => (
          <StyledContactItemLi key={id}>
            {name} : {[number]}
            <StyledFilterButton
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
              disabled={result.isLoading}
            >
              Delete
            </StyledFilterButton>
          </StyledContactItemLi>
        ))}
    </div>
  );
};
