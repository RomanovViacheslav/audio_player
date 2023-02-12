import React, { useState, ChangeEvent } from 'react';
import { Button, ExclamatoryIcon, Input } from '../../ui';

import style from './Form.module.scss';

type TProps = {
  setData: React.Dispatch<React.SetStateAction<string>>;
};

export const Form = ({ setData }: TProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (!value.startsWith('https://')) {
      setError('Error message here');
    } else {
      setError('');
      setData(value);
    }
  };

  return (
    <div className={style.wrapper}>
      <span>Insert the link</span>
      <Input error={!!error} onChange={handleChange} placeholder="https://">
        {error && <div className={style.error}>{error}</div>}
        {error && (
          <div className={style.error_icon}>
            <ExclamatoryIcon />
          </div>
        )}
        <Button onclick={handleClick} />
      </Input>
    </div>
  );
};
