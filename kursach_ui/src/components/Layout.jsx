import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ title, content, children }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={content} />
    </Helmet>
    <Header />
    <>{children}</>
    <Footer />
  </>
);

export default Layout;