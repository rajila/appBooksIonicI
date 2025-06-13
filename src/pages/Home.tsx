import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
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
        <IonGrid>
          <IonRow>
            <IonCol sizeXs='12' sizeSm='6'sizeMd='6' sizeLg='4' sizeXl='4'>
              <div className='content'>1 of 3</div>
            </IonCol>
            <IonCol sizeXs='12' sizeSm='6'sizeMd='6' sizeLg='4' sizeXl='4'>
              <div className='content'>2 of 3</div>
            </IonCol>
            <IonCol sizeXs='12' sizeSm='6'sizeMd='6' sizeLg='4' sizeXl='4'>
              <div className='content'>3 of 3</div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
