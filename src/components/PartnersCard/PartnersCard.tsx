import { IonItem, IonIcon, IonLabel, IonThumbnail, IonImg, IonList, IonListHeader} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import image from '../../assets/imagem_costura.jpg';
import './PartnersCard.css';

interface ContainerProps {
  name?: string;
}

const PartnerCard: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="containerCard">
        <IonList>
            <IonItem href="/partners-screen">
                <IonThumbnail slot="start">
                    <IonImg src={image} />
                </IonThumbnail>
                <IonLabel>imagem 1</IonLabel>
            </IonItem>
            <IonItem href="/partners-screen">
                <IonThumbnail slot="start">
                    <IonImg src={image} />
                </IonThumbnail>
                <IonLabel>imagem 2</IonLabel>
            </IonItem>
            <IonItem href="/partners-screen">
                <IonThumbnail slot="start">
                    <IonImg src={image} />
                </IonThumbnail>
                <IonLabel>imagem 3</IonLabel>
            </IonItem>
            <IonItem href="/partners-screen">
                <IonThumbnail slot="start">
                    <IonImg src={image} />
                </IonThumbnail>
                <IonLabel>imagem 4</IonLabel>
            </IonItem>
        </IonList>
    </div>
  );
};

export default PartnerCard;
