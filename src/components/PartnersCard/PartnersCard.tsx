import { IonItem, IonIcon, IonLabel, IonThumbnail, IonImg, IonList, IonListHeader} from '@ionic/react';
import image from '../../assets/imagem_costura.jpg';
import { Partners } from './PartnersHardCode';
import './PartnersCard.css';

interface ContainerProps {
  name?: string;
}

const PartnerCard: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="containerCard">
        <IonListHeader>
            <IonLabel> Partners </IonLabel>
        </IonListHeader>
        <IonList>
            {Partners ?
                Partners.map((partner) => {
                    return (
                        <IonItem routerLink={`/partners-screen/${partner.id}`}>
                            <IonThumbnail slot="start">
                                <IonImg src={image} />
                            </IonThumbnail>
                            <IonLabel> {partner.name} </IonLabel>
                        </IonItem>
                    )
                }) :
                <IonListHeader>
                    <IonLabel>There are no partners at the moment.</IonLabel>
                </IonListHeader>
            }
        </IonList>
    </div>
  );
};

export default PartnerCard;
