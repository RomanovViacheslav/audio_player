import React from 'react';
import style from './Input.module.scss';

type TProps = {
  children?: React.ReactNode;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
};

export const Input = ({ children, placeholder, onChange, error }: TProps) => (
  <div className={style.input_container}>
    <input
      onChange={onChange}
      className={!error ? style.input : `${style.input} ${style.error}`}
      placeholder={placeholder}
    />
    {children}
  </div>
);
