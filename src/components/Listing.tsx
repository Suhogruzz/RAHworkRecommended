
import ItemQuantity from "./ItemQuantity";
import { FC } from 'react';
import ItemPrice from './ItemPrice';


export type EtsyItems = {
    listing_id: number;
    url: string;
    MainImage: { url_570xN: string };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
};

type OfferListProps = {
    items: EtsyItems[];
};

const Listing: FC<OfferListProps> = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">
                            {item.title.length > 50
                                ? item.title.substring(0, 50) + '...'
                                : item.title}
                        </p>
                        <ItemPrice
                            currency_code={item.currency_code}
                            price={item.price}
                        />
                        <ItemQuantity quantity={item.quantity} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Listing;