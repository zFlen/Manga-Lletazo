interface CardMangaProps {
    title: string;
    img: string;
}

const CardManga: React.FC<CardMangaProps> = ({ title, img }) => {
    return (
            <div className="containerCard bg-gray-700 rounded-xl text-center">
                <img src={img} alt="" className='h-44 object-cover rounded-xl'/>
                <h3 className="mt-2 p-1">{title}</h3>
            </div>   
    );
}

export default CardManga;