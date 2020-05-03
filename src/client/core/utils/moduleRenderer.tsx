import React from 'react';
import Modules from '@modules/moduleMapper';

type uiModule = {
  sys: {
    id: string;
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

export default function renderUIModules(uiModules: uiModule[]): any {
  return uiModules.map(uiModule => {
    const {
      fields,
      sys: {
        id,
        contentType: {
          sys: { id: contentTypeId }
        }
      }
    } = uiModule;
    const uiModuleRenderer: uiModules = Modules;
    const ModuleToRender = uiModuleRenderer[contentTypeId];
    return (
      ModuleToRender && (
        <React.Fragment key={id}>
          <ModuleToRender fields={fields} />
        </React.Fragment>
      )
    );
  });
}
