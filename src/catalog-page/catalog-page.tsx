import { useState } from 'react';
import Banner from '../banner/banner';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CatalogSection from '../catalog-section/catalog-section';
import { CameraType } from '../types';
import CallItem from '../call-item/call-item';

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
