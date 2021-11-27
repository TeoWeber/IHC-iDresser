import { useContext, useState } from 'react';
import { IonItem, IonLabel, IonList, IonButton,
         IonCard, IonCardContent, IonCardHeader, IonContent, IonCardSubtitle, IonCardTitle, IonCheckbox } from '@ionic/react';
import image from '../../assets/imagem_costura.jpg';
import { Partners } from '../PartnersCard/PartnersHardCode';
import { Order, UserContext } from "../../App";


interface ContainerProps {
  id: number;
}

const PartnersScreen: React.FC<ContainerProps> = ({ id }) => {
  const partner = Partners[id]

  const [totalPrice, setTotalPrice] = useState(0)

  const handleChange = (isChecked: boolean, price: number) => {
    if ( isChecked ) {
      setTotalPrice(totalPrice + price)
    }
    else {
      if (totalPrice - price < 0)
        setTotalPrice(0)
      else 
        setTotalPrice(totalPrice - price)
    }
  }

  const user = useContext(UserContext);

  const handleClick = () => {
      const order:Order = {
          service: partner.name,
          price: totalPrice
      }
      user.history.push(order)
      user.setHistory([... user.history])

      setTotalPrice(0)
  }

  return (
    <div className="Partners-info">
        <IonContent fullscreen>
          <IonCard>
            <img src={image} />
            <IonCardHeader>
              <IonCardTitle>{partner.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonCardSubtitle>
                  <IonLabel>Tipo de Serviço - Preço</IonLabel>
                </IonCardSubtitle>
                <IonList>
                  {partner.services.map((p)=>{
                    return (
                      <IonItem>
                        <IonCheckbox
                          slot="start" 
                          onIonChange={e => handleChange(e.detail.checked, p.price)} 
                        />
                        <IonLabel>{p.service} - ${p.price},00</IonLabel>
                      </IonItem>
                    )
                  })}
                  <IonItem>
                    <IonLabel>Total: ${totalPrice},00</IonLabel>
                  </IonItem>
                  
                  <IonItem>
                    <IonButton
                      disabled={totalPrice ? false : true}
                      color="success" 
                      routerLink="/partners" 
                      onClick={() => handleClick()}
                    >
                      Finish Order
                    </IonButton>
                  </IonItem>
                </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
    </div>
  );
};

export default PartnersScreen;
