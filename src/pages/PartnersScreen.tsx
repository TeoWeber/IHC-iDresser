import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import PartnersScreen from '../components/PartnersScreen/PartnersScreen';
import './Tab2.css';

const PartnerScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PartnersScreen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <PartnersScreen/>
      </IonContent>
    </IonPage>
  );
};

export default PartnerScreen;
