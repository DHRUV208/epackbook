import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Layout from '../../common-components/page-elements/layout';

import Home from './home/home';
import Pricing from './pricing/pricing';
import Features from './features/features';
import Contact from './contact/contact';
import About from './about/aboutUs';
import KnowledgeBase from './knowledge/knowledgeBase';
import TermsServices from './terms-services/termsServices';
import PrivacyPolicy from './privacy-policy/privacy';
import RefundPolicy from './refund-policy/refund';

const WebsiteRouting = () => {
  return (
    <Fragment>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/knowledgeBase-page" element={<KnowledgeBase />} />
        <Route path="/terms-of-services" element={<TermsServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      {/* </Layout> */}
    </Fragment>
  );
};
export default WebsiteRouting;
