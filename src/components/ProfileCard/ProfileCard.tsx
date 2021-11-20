import { useState } from 'react';
import { IonItem, IonAvatar, IonLabel, IonList, IonButton, IonListHeader } from '@ionic/react';
import image from '../../assets/imagem_costura.jpg';

interface ContainerProps {
  name?: string;
}

const PartnerCard: React.FC<ContainerProps> = ({ name }) => {

  return (
    <div className="containerCard">
        <IonList>
            <IonAvatar slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonButton expand="block"> Change Profile Picture </IonButton>
            <IonListHeader>
                <IonLabel>Nome de Usuario</IonLabel>
                <IonButton expand="block"> edit </IonButton>
            </IonListHeader>
            <IonItem>
                <IonLabel>Nome de Usuario</IonLabel>
            </IonItem>
            <IonListHeader>
                <IonLabel>Aniversário</IonLabel>
                <IonButton expand="block"> edit </IonButton>
            </IonListHeader>
            <IonItem>
                <IonLabel>dd/mm/aa</IonLabel>
            </IonItem>
            <IonListHeader>
                <IonLabel>Endereço</IonLabel>
                <IonButton expand="block"> edit </IonButton>
            </IonListHeader>
            <IonItem>
                <IonLabel>Address</IonLabel>
            </IonItem>
        </IonList>
    </div>
  );
};

export default PartnerCard;
