import React, { useEffect, ReactComponentElement } from 'react';
import BasePage from '@components/BasePage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomePage } from '@redux/actions';
import { pageFieldsSelector } from '@redux/selectors';
import detectMobile from '@utils/mobileUserAgent';
import Hero from '@modules/Hero';
import Modules from '@modules/moduleMapper';

type uiModule = {
  sys: {
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: object;
};

type uiModules = {
  [name: string]: React.ReactType;
};

function renderUIModules(uiModules: uiModule[]): any {
  return uiModules.map(uiModule => {
    const { id } = uiModule.sys.contentType.sys;
    const { fields } = uiModule;
    const uiModuleRenderer: uiModules = Modules;
    const ModuleToRender = uiModuleRenderer[id];
    return ModuleToRender && <ModuleToRender fields={fields} />;
  });
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector(pageFieldsSelector);
  useEffect(() => {
    dispatch(fetchHomePage());
  }, []);
  if (!page) return null;
  const { hero, metaData, uiModules } = page;

  return (
    <BasePage metaData={metaData}>
      <div className="home__container">{hero && <Hero hero={hero} />}</div>
      {renderUIModules(uiModules)}
    </BasePage>
  );
};

function loadData(store: any, userAgent: any): void {
  const isMobileDevice = detectMobile(userAgent);
  // eslint-disable-next-line no-console
  console.log({ isMobileDevice });
  return store.dispatch(fetchHomePage());
}

export default {
  loadData,
  component: Home
};
