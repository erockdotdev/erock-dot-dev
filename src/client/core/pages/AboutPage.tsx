import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAboutPage } from '@redux/actions';
import { pageFieldsSelector } from '@redux/selectors';
import BasePage from '@components/BasePage';
import renderUIModules from '@utils/moduleRenderer';

const AboutPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(pageFieldsSelector);
  useEffect(() => {
    dispatch(fetchAboutPage());
  }, []);
  if (!page) return null;

  const { metaData, uiModules } = page;
  return <BasePage metaData={metaData}>{renderUIModules(uiModules)}</BasePage>;
};

function loadData(store: any): void {
  return store.dispatch(fetchAboutPage());
}

export default {
  loadData,
  component: AboutPage
};
