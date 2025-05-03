import { FC, useState } from 'react';
import axios from 'axios';
import StarSvg from '../../assets/star.svg';
import HeartOSvg from '../../assets/heart-o.svg';
import HeartSvg from '../../assets/heart.svg';
import { API_URL } from '../../config';

export interface RestaurantProps {
    id: number;
    name: string;
    rating: number;
    rating_count: number;
    images: string;
    desc: string;
    isFavorite: boolean;
}

export const Restaurant: FC<RestaurantProps> = (props) => {
    const [restaurant, setRestaurant] = useState<RestaurantProps>(props);

    const handleClickFavorite = async () => {
        try {
            const { data } = await axios.post(
                API_URL + '/restaurant/update/' + restaurant.id, {
                    isFavorite: !restaurant.isFavorite
                }
            );
            setRestaurant(data);
          } catch (error) {
            console.log(error);
          }
    };

    return (
        <li key={restaurant.id}>
            <div className="restaurant-item">
                <figure><img src={restaurant.images} /></figure>
                <div className="restaurant-item-info">
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.desc}</p>
                    <em>
                        <span><img src={StarSvg} />{restaurant.rating} ({restaurant.rating_count})</span>
                        <button
                            onClick={handleClickFavorite}
                        ><img src={restaurant.isFavorite ? HeartSvg : HeartOSvg} /></button>
                    </em>
                </div>
            </div>
        </li>
    );
};
