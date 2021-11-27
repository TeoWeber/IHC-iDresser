import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from "react-router-dom";
import PartnersScreen from '../components/PartnersScreen/PartnersScreen';
import { Partners } from '../components/PartnersCard/PartnersHardCode';

interface PartnersScreenProps {
  partnerId: string;
}

const PartnerScreen: React.FC<RouteComponentProps<PartnersScreenProps>> = ({ match }) => {
  const { params: { partnerId } } = match

  const id = parseInt( partnerId )

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{Partners[id].name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <PartnersScreen id={id} />
      </IonContent>
    </IonPage>
  );
};

export default PartnerScreen;
