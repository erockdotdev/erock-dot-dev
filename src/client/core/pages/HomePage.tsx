import React, { useEffect } from 'react';
import BasePage from '@components/BasePage';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomePage } from '@redux/actions';
import { pageFieldsSelector } from '@redux/selectors';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector(pageFieldsSelector);
  useEffect(() => {
    dispatch(fetchHomePage());
  }, []);
  if (!page) return null;
  const { hero, metaData } = page;
  const fields = get(hero, 'fields', '');

  return (
    <BasePage metaData={metaData}>
      <div className="home__container">
        <h3>{fields.headline}</h3>
        <p>{fields.subcopy}</p>
      </div>
    </BasePage>
  );
};

function loadData(store: any): void {
  return store.dispatch(fetchHomePage());
}

export default {
  loadData,
  component: Home
};
