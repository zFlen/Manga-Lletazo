import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';

interface GenresMangaProps {
    genre: string;
    icon: string;
}

const GenresManga: React.FC<GenresMangaProps> = ({ genre, icon }) => {
    return (
        <div>
            <IonButton shape='round' className='w-auto' color="primary">
                {genre}
            </IonButton>
        </div>
    );
}

export default GenresManga;