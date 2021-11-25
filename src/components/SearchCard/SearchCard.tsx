import { useState } from 'react';
import { IonItem, IonIcon, IonLabel, IonThumbnail, IonImg, IonList, IonListHeader, IonSearchbar } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import image from '../../assets/imagem_costura.jpg';
import { Fragment } from 'ionicons/dist/types/stencil-public-runtime';

interface ContainerProps {
  name?: string;
}

const PartnerCard: React.FC<ContainerProps> = ({ name }) => {
  const [searchText, setSearchText] = useState('')
  return (
    <>
    {searchText ?
        <div className="containerCard">
        <IonList>
            <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            <IonListHeader>
                <IonLabel> Filtros </IonLabel>
            </IonListHeader>
            <IonItem>
                <IonThumbnail slot="start">
                    <IonImg src={image} />
                </IonThumbnail>
                <IonLabel>Costura</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
            </IonItem>
        </IonList>
        </div> :
        <div className="containerCard">
        <IonList>
            <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            <IonListHeader>
                <IonLabel> Filtros </IonLabel>
            </IonListHeader>
            <IonItem>
                <IonThumbnail slot="start">
                    <IonImg src={image} />
                </IonThumbnail>
                <IonLabel>Costura</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
            </IonItem>
            <IonItem class="test">
                <IonThumbnail slot="start">
                    <IonImg src={image} />
                </IonThumbnail>
                <IonLabel>Lavagem</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
            </IonItem>
            <IonItem class="test">
                <IonThumbnail slot="start">
                    <IonImg src={image} />
                </IonThumbnail>
                <IonLabel>Aluguel</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
            </IonItem>
        </IonList>
    </div> }
    </>
  );
};

export default PartnerCard;
