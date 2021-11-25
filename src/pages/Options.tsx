import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import OptionsCard from '../components/OptionsCard/OptionsCard';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Options</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <OptionsCard />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
