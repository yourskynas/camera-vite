import Banner from '../banner/banner';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CatalogSection from '../catalog-section/catalog-section';
import Footer from '../footer/footer';
import Header from '../header/header';

const CatalogPage = (): JSX.Element => (
  <div className="wrapper">
    <Header />
    <main>
      <Banner />
      <div className="page-content">
        <Breadcrumbs />
        <CatalogSection />
      </div>
    </main>
    <Footer />
  </div>
);

export default CatalogPage;
