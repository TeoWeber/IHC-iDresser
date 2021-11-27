import React, { useContext } from "react";
import { IonCard, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { personOutline, layersOutline, personCircleOutline, settingsOutline, arrowUndoOutline } from 'ionicons/icons';
import { Order, UserContext } from "../../App";
import './OptionsCard.css';

interface ContainerProps {
  name?: string;
}

const PartnerCard: React.FC<ContainerProps> = ({ name }) => {

    const user = useContext(UserContext);

    const logoutClick = () => {
        user.logged(false);
    };

    return (
        <div className="optionsContainer">
            <IonCard>
                <IonItem routerLink="/profile">
                    <IonIcon icon={personCircleOutline} slot="start" />
                    <IonLabel>Account management</IonLabel>
                </IonItem>

                <IonItem 
                    routerLink="/history"
                >
                    <IonIcon icon={layersOutline} slot="start" />
                    <IonLabel>Your history</IonLabel>
                </IonItem>

                <IonItem routerLink="/partner-profile">
                    <IonIcon icon={personOutline} slot="start" />
                    <IonLabel>Partner Profile</IonLabel>
                </IonItem>

                <IonItem 
                    routerLink="/login"
                    onClick={logoutClick}
                >
                    <IonIcon icon={arrowUndoOutline} slot="start" />
                    <IonLabel>Log Out</IonLabel>
                </IonItem>
            </IonCard>
        </div>
    );
};

export default PartnerCard;
