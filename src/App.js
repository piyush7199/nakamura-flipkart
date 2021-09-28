import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Box } from '@material-ui/core'

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from './components/cart/Cart';
import { TemplateProvider } from './templetes/TemplateProvider.js';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/itemDetails/DetailView';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop:54}}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/cart' component={Cart} />
              <Route path='/product/:id' component={DetailView} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
