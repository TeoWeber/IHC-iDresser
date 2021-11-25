import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PartnerCard from '../components/PartnersCard/PartnersCard';

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
