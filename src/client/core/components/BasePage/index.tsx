import React from 'react';
import MetaData from '@components/MetaData';
import { MetaData as MetaDataType } from '@custom-types/index';
import './base-page.scss';

type Props = {
  metaData?: MetaDataType;
};

const BasePage: React.FC<Props> = ({ children, metaData }) => {
  return (
    <section className="basepage__container">
      {metaData && <MetaData metaData={metaData} />}
      {children}
    </section>
  );
};

export default BasePage;
