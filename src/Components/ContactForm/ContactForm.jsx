import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled.';

import React from 'react';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: contacts } = useGetContactsQuery();

  const [addContact] = useAddContactMutation();

  const onSubmit = newContact => {
    contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : addContact(newContact);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>
        <span>Name:</span>
        <StyledInput {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </StyledLabel>

      <StyledLabel>
        <span>Number:</span>
        <StyledInput {...register('number', { required: true })} type="text" />
        {errors.number && <span>This field is required</span>}
      </StyledLabel>

      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
