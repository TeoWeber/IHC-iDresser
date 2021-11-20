import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import PartnerCard from '../components/PartnersCard/PartnersCard';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Partners</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <PartnerCard/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
