import { IonCard, IonItem, IonIcon, IonLabel, IonThumbnail, IonImg } from '@ionic/react';
import { personOutline, layersOutline, personCircleOutline, settingsOutline, arrowUndoOutline } from 'ionicons/icons';
import './OptionsCard.css';

interface ContainerProps {
  name?: string;
}

const PartnerCard: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="optionsContainer">
        <IonCard>
            <IonItem href="/profile">
                <IonIcon icon={personCircleOutline} slot="start" />
                <IonLabel>Account management</IonLabel>
            </IonItem>

            <IonItem href="/history">
                <IonIcon icon={layersOutline} slot="start" />
                <IonLabel>Your history</IonLabel>
            </IonItem>

            <IonItem href="/partner-profile">
                <IonIcon icon={personOutline} slot="start" />
                <IonLabel>Partner Profile</IonLabel>
            </IonItem>

            <IonItem href="settings">
                <IonIcon icon={settingsOutline} slot="start" />
                <IonLabel>Settings</IonLabel>
            </IonItem>

            <IonItem href="#">
                <IonIcon icon={arrowUndoOutline} slot="start" />
                <IonLabel>Log Out</IonLabel>
            </IonItem>
        </IonCard>
    </div>
  );
};

export default PartnerCard;
