import React, { useContext } from "react";
import { IonItem, IonIcon, IonLabel, IonThumbnail, IonImg, IonList, IonListHeader} from '@ionic/react';
import { userInfo } from 'os';
import { Order, UserContext } from "../../App";

interface ContainerProps {
  name?: string;
}

const PartnerCard: React.FC<ContainerProps> = ({ name }) => {
    const user = useContext(UserContext);

    return (
        <div className="containerCard">
            <IonList>
                <IonListHeader>
                    <IonLabel> Your Orders </IonLabel>
                </IonListHeader>

                {user.history ? 
                    user.history.map((order) => {
                        return (
                            <IonItem>
                                <IonLabel> From: {order.service} </IonLabel>
                                <IonLabel slot="end"> Price: ${order.price},00 </IonLabel>
                            </IonItem>
                        )
                    }) :
                    <IonListHeader>
                        <IonLabel>You have no orders.</IonLabel>
                    </IonListHeader>
                }
            </IonList>
        </div>
    );
};

export default PartnerCard;
