import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HistoryCard from '../components/HistoryCard/HistoryCard';

const History: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <HistoryCard/>
      </IonContent>
    </IonPage>
  );
};

export default History;
