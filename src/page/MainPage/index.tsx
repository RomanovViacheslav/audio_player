import React, { useState } from 'react';
import { AudioPlayer, Form } from '../../features';
import style from './MainPage.module.scss';

const MainPage = () => {
  const [data, setData] = useState('');

  return (
    <main>
      <div className={style.content__container}>
        {!data ? <Form setData={setData} /> : <AudioPlayer setData={setData} audioSource={data} />}
      </div>
    </main>
  );
};

export default MainPage;
