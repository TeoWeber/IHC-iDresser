import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import PartnerProfileCard from '../components/PartnerProfileCard/PartnerProfileCard';

const PartnerProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Partner Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <PartnerProfileCard />
      </IonContent>
    </IonPage>
  );
};

export default PartnerProfilePage;
