import React, { useEffect } from 'react';
import BasePage from '@components/BasePage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomePage } from '@redux/actions';
import { pageFieldsSelector } from '@redux/selectors';
import detectMobile from '@utils/mobileUserAgent';
import Hero from '@modules/Hero';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector(pageFieldsSelector);
  useEffect(() => {
    dispatch(fetchHomePage());
  }, []);
  if (!page) return null;
  const { hero, metaData } = page;

  return (
    <BasePage metaData={metaData}>
      <div className="home__container">{hero && <Hero hero={hero} />}</div>
    </BasePage>
  );
};

function loadData(store: any, userAgent: any): void {
  // const isMobileDevice = detectMobile(userAgent);

  return store.dispatch(fetchHomePage());
}

export default {
  loadData,
  component: Home
};
