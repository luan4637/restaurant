import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { RestaurantProps, Restaurant } from './Restaurant';
import { API_URL } from '../../config';

const RestaurantPage: FC = () => {
    const [restaurants, setRestaurants ] = useState<RestaurantProps[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await axios.get(
                    API_URL + '/restaurant'
                );
                setRestaurants(data);
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);

    return (
        <>
            <h1>Restaurants</h1>
            <ul className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <Restaurant key={restaurant.id} 
                                    id={restaurant.id} 
                                    name={restaurant.name}
                                    desc={restaurant.desc}
                                    images={restaurant.images}
                                    rating={restaurant.rating}
                                    rating_count={restaurant.rating_count}
                                    isFavorite={restaurant.isFavorite}
                                />;
                    })
                }
            </ul>
        </>
        
    );
}

export default RestaurantPage;