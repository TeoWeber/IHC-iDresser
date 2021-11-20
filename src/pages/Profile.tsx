import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import { useState } from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard';

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ProfileCard />
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
