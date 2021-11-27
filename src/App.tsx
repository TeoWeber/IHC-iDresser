import { Redirect, Route } from 'react-router-dom';
import {
  IonApp
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useState, useContext, createContext } from 'react';
import Login from './pages/Login';
import MainTabs from './MainTabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

export interface Order {
  service: string;
  price: number;
}

interface IUserManager {
  logged: Function;
  setHistory: Function;
  history: Order[];
}

const user: IUserManager = {
  logged: () => {},
  setHistory: () => {},
  history: []
};

export const UserContext = createContext<IUserManager>(user);

const IonicApp: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [history, setHistory] = useState([]);
  const user = useContext(UserContext);

  user.logged = setIsLoggedIn;
  user.setHistory = setHistory;
  user.history = history;

  return (
    <IonApp>
      <IonReactRouter>
        <Route path="/login" component={Login} exact />
        <Route path="/" component={isLoggedIn ? MainTabs : Login} />
      </IonReactRouter>
    </IonApp>
  );
};

const App: React.FC = () => (
  <UserContext.Provider value={user}>
    <IonicApp />
  </UserContext.Provider>
);

export default App;
