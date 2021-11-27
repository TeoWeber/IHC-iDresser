import { useState } from 'react';
import { IonItem, IonAvatar, IonLabel, IonList, IonButton, IonListHeader } from '@ionic/react';
import './ProfileCard.css';

interface ContainerProps {
  name?: string;
}

const PartnerCard: React.FC<ContainerProps> = ({ name }) => {

  return (
    <div className="containerCard">
        <IonList>
            <div className="containerProfilePicture">
                <IonAvatar slot="start" className="profilePicture">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </IonAvatar>
                <IonButton expand="block"> Change Profile Picture </IonButton>
            </div>
            <IonListHeader>
                <IonLabel>Name</IonLabel>
                <IonButton expand="block" > edit </IonButton>
            </IonListHeader>
            <IonItem>
                <IonLabel>Fulano Beltrano</IonLabel>
            </IonItem>
            <IonListHeader>
                <IonLabel>Birthday</IonLabel>
                <IonButton expand="block"> edit </IonButton>
            </IonListHeader>
            <IonItem>
                <IonLabel>13/01/1999</IonLabel>
            </IonItem>
            <IonListHeader>
                <IonLabel>Address</IonLabel>
                <IonButton expand="block"> edit </IonButton>
            </IonListHeader>
            <IonItem>
                <IonLabel>Rua Alencar Costa, 958, apto. 21</IonLabel>
            </IonItem>
        </IonList>
    </div>
  );
};

export default PartnerCard;
