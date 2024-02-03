// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthRouting from './modules/auth/auth.routing';
import ERPAdminRouting from './modules/erp-admin/erp-admin.routing';
import { Provider } from 'react-redux';
import _store, { _persistorStore } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import GenericBackdrop from './common-components/page-elements/genericBackdrop';
import SuperAdminRouting from './modules/super-admin/super-admin.routing';

import WebsiteRouting from './modules/website/website.routing';

import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <React.StrictMode>
      <Provider store={_store}>
        {/* <PersistGate loading={null} persistor={_persistorStore}> */}
        <Suspense fallback={<GenericBackdrop />}>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/auth/*" element={<AuthRouting />} />
                <Route path="/super/*" element={<SuperAdminRouting />} />
                <Route path="/erp/*" element={<ERPAdminRouting />} />
                <Route path="/*" element={<WebsiteRouting />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </Suspense>
        {/* </PersistGate> */}
      </Provider>
    </React.StrictMode>
  );
}

export default App;
