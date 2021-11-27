import { IonItem, IonAvatar, IonLabel, IonList, IonButton, IonListHeader, IonToggle } from '@ionic/react';
import './PartnerProfileCard.css';

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
                <IonButton expand="block"> Change Partner Profile Picture </IonButton>
            </div>
            <IonListHeader>
                <IonLabel>Open</IonLabel>
                <IonToggle name="blueberry" checked />
            </IonListHeader>
            <IonListHeader>
                <IonLabel>Start</IonLabel>
                <IonButton expand="block" > edit </IonButton>
            </IonListHeader>
            <IonItem>
                <IonLabel>8:00</IonLabel>
            </IonItem>
            <IonListHeader>
                <IonLabel>Finish</IonLabel>
                <IonButton expand="block"> edit </IonButton>
            </IonListHeader>
            <IonItem>
                <IonLabel>17:00</IonLabel>
            </IonItem>
        </IonList>
    </div>
  );
};

export default PartnerCard;
