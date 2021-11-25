import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { storefrontOutline, optionsOutline, searchOutline } from 'ionicons/icons';
import Search from './pages/Search';
import Partners from './pages/Partners';
import Options from './pages/Options';
import Profile from './pages/Profile';
import PartnerScreen from './pages/PartnersScreen';
import PartnerProfile from './pages/PartnerProfile';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/partners">
            <Partners />
          </Route>
          <Route exact path="/options">
            <Options />
          </Route>
          <Route exact path="/partners-screen">
            <PartnerScreen />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/partner-profile">
            <PartnerProfile />
          </Route>
          <Route exact path="/">
            <Redirect to="/partners" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/partners">
            <IonIcon icon={storefrontOutline} />
            <IonLabel>Partners</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/options">
            <IonIcon icon={optionsOutline} />
            <IonLabel>Options</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
