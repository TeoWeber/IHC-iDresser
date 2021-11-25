import { IonItem, IonIcon, IonLabel, IonThumbnail, IonImg, IonList, IonListHeader,
         IonCard, IonCardContent, IonCardHeader, IonContent, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import image from '../../assets/imagem_costura.jpg';
import map from '../../assets/map.jpeg';


interface ContainerProps {
  name?: string;
}

const PartnersScreen: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="Partners-info">
        <IonContent fullscreen>
          <IonCard>
            <img src={image} />
            <IonCardHeader>
              <IonCardTitle>Nome Parceiro</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <h2><IonLabel>Tipo de Serviço - Preço</IonLabel></h2>
              <p><IonLabel>Custura Jeans - R$ 40,00/ Peça</IonLabel></p>
              <p><IonLabel>Custura Algodão - R$ 30,00/ Peça</IonLabel></p>
              <p><IonLabel>Lavagem - R$ 10,00/ Peça (minimo 6 peças)</IonLabel></p>
            </IonCardContent>
          </IonCard>
        </IonContent>
    </div>
  );
};

export default PartnersScreen;
