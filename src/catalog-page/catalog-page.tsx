import { useState } from 'react';
import Banner from '../components/banner/banner';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import CatalogSection from '../components/catalog-section/catalog-section';
import { CameraType } from '../types';
import CallItem from '../components/call-item/call-item';

const CatalogPage = (): JSX.Element => {
  const [ isActiveModal, setIsActiveModal ] = useState<boolean>(false);
  const [ activeProduct, setActiveProduct ] = useState<CameraType | null>();
  const handleButtonClick = (camera: CameraType | null) => {
    setIsActiveModal(!isActiveModal);
    setActiveProduct(camera);
  };

  return (
    <>
      <Banner />
      <div className="page-content">
        <Breadcrumbs />
        <CatalogSection onClick={handleButtonClick} />
        {isActiveModal && activeProduct && <CallItem activeProduct={activeProduct} onClick={handleButtonClick} />}
      </div>
    </>
  );
};

export default CatalogPage;
