import React from 'react'

type ItemQuantityProps = {
    quantity: number,
}

const ItemQuantity:React.FC<ItemQuantityProps> = ({ quantity }) => {
  return (
    <p
    className={`item-quantity ${
        quantity <= 10
            ? 'level-low'
            : quantity <= 20
            ? 'level-medium'
            : 'level-high'
    }`}
>
    {quantity} left
</p>
);
};

export default ItemQuantity