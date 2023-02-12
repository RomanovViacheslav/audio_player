import React from 'react';
import { ArrowIcon } from '../../icons/ArrowIcon';
import style from './Button.module.scss';

type TProps = {
  onclick: () => void;
};

export const Button = ({ onclick }: TProps) => (
  <button onClick={onclick} className={style.button} type="submit">
    <ArrowIcon />
  </button>
);
