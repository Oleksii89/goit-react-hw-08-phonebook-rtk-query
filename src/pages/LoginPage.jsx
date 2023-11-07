import { StyledButton } from 'Components/ContactForm/ContactForm.styled.';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authSlice';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Email:</span>
        <input {...register('email', { required: true })} type="email" />
        {errors.email && <span>This field is required</span>}
      </label>

      <label>
        <span>Password:</span>
        <input
          {...register('password', { required: true, minLength: 6 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <StyledButton type="submit">Sign In</StyledButton>
    </form>
  );
};

export default LoginPage;
