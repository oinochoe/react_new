import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
    return <Route path="/News_Feed/:category?" component={NewsPage} />;
};

export default App;
