import { IonItem, IonIcon, IonLabel, IonThumbnail, IonImg, IonList, IonListHeader, IonButton,
         IonCard, IonCardContent, IonCardHeader, IonContent, IonCardSubtitle, IonCardTitle, IonCheckbox, IonInput} from '@ionic/react';
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
                <IonCardSubtitle>
                  <IonLabel>Tipo de Serviço - Preço - Quantidade</IonLabel>
                </IonCardSubtitle>
                <IonList>
                  <IonItem>
                    <IonLabel>Custura Jeans - R$ 40,00/ Peça</IonLabel>
                    <IonCheckbox disabled slot="start"></IonCheckbox>
                    <IonInput placeholder="placeholder" type="number"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Custura Algodão - R$ 30,00/ Peça</IonLabel>
                    <IonCheckbox disabled slot="start"></IonCheckbox>
                    <IonInput placeholder="placeholder" type="number"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Lavagem - R$ 10,00/ Peça (minimo 6 peças)</IonLabel>
                    <IonCheckbox disabled slot="start"></IonCheckbox>
                    <IonInput placeholder="placeholder" type="number"></IonInput>
                  </IonItem>
                  
                  <IonItem>
                    <IonButton color="success">Solicitar Serviços</IonButton>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Total:</IonLabel>
                  </IonItem>
                </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
    </div>
  );
};

export default PartnersScreen;
