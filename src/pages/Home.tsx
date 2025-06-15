import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonCard,
  IonCardHeader, IonCardContent, IonCardTitle
 } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow>
          <div className='main-content'>
            <h1>The Final Countdown</h1>
            <section>
              <p className='detalle-album'>
              Europe es un grupo sueco de hard rock y heavy metal, formados en 1979 con el nombre previo de FORCE, 
              después de ganar un concurso nacional de bandas en Suecia, 
              grabaron su primer disco en el mismo año ya con el nombre de Europe y editaron su disco homónimo, 
              luego sacaron Wings of Tomorrow y finalmente saltaron a la fama a nivel mundial 
              en 1986 con el disco The Final Countdown, que incluía la canción homónima, número 1 en 26 países, 
              Rock the Night y la balada Carrie
              </p>
            </section>
            <section>
              <IonButton>Reproducir</IonButton>
              <IonButton>Siguiente Album</IonButton>
            </section>
          </div>
        </IonRow>
        <IonGrid className=''>
          <IonRow>
            <IonCol sizeXs='12' sizeSm='6'sizeMd='6' sizeLg='4' sizeXl='4'>
              <div className='content'>
                <IonCard className="custom-card">
                  <IonCardHeader>
                    <IonCardTitle className='txt-center'>The Final Countdown</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    <IonRow className='content-center'>
                      <img className='portada-card' src='/public/assets/img/portada1.jpg'></img>
                    </IonRow>
                    <IonRow className='description-card'>
                      Habla de partir hacia lo desconocido, utilizando como metáfora un viaje espacial. Muchos interpretan el tema como una representación del espíritu de exploración y la incertidumbre del futuro.
                    </IonRow>
                    <IonRow>
                      <IonCol sizeXs='6'>
                        <IonButton className='boton-card' color="primary">
                          View
                        </IonButton>
                        <IonButton className='boton-card' color="primary">
                          Edit
                        </IonButton>
                      </IonCol>
                      <IonCol sizeXs='6' className='descripcion-min-card'> 5:09 min</IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>
            <IonCol sizeXs='12' sizeSm='6'sizeMd='6' sizeLg='4' sizeXl='4'>
              <div className='content'>
                <IonCard className="custom-card">
                  <IonCardHeader>
                    <IonCardTitle className='txt-center'>Rock the Night</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    <IonRow className='content-center'>
                      <img className='portada-card' src='/public/assets/img/portada2.webp'></img>
                    </IonRow>
                    <IonRow className='description-card'>
                      La canción "Rock the Night" de Europe trata sobre la perseverancia frente a la adversidad y la celebración del momento presente, utilizando la metáfora de "rockear la noche" para simbolizar vivir la vida al máximo, encontrar alegría en las dificultades y no rendirse cuando las cosas se ponen difíciles
                    </IonRow>
                    <IonRow>
                      <IonCol sizeXs='6'>
                        <IonButton className='boton-card' color="primary">
                          View
                        </IonButton>
                        <IonButton className='boton-card' color="primary">
                          Edit
                        </IonButton>
                      </IonCol>
                      <IonCol sizeXs='6' className='descripcion-min-card'> 4:05 min</IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>
            <IonCol sizeXs='12' sizeSm='6'sizeMd='6' sizeLg='4' sizeXl='4'>
              <div className='content'>
                <IonCard className="custom-card">
                  <IonCardHeader>
                    <IonCardTitle className='txt-center'>Carrie</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    <IonRow className='content-center'>
                      <img className='portada-card' src='/public/assets/img/portada3.jpg'></img>
                    </IonRow>
                    <IonRow className='description-card'>
                      Es un tema de desamor, una relación que terminó y no tiene futuro. Aquí l protagonista le habla a una chica diciéndole que las cosas cambian y que él no puede hacer nada en el sentido de llegar a amarla y quedarse todo el tiempo con ella
                    </IonRow>
                    <IonRow>
                      <IonCol sizeXs='6'>
                        <IonButton className='boton-card' color="primary">
                          View
                        </IonButton>
                        <IonButton className='boton-card' color="primary">
                          Edit
                        </IonButton>
                      </IonCol>
                      <IonCol sizeXs='6' className='descripcion-min-card'> 4:32 min</IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
