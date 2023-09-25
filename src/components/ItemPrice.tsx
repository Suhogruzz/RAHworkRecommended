import React from 'react'

type ItemPriceProps = {
    currency_code: string,
    price: string
}

const ItemPrice:React.FC<ItemPriceProps> = ({ currency_code, price }) => {
  return (
    <p className="item-price">
        {currency_code === 'USD'
            ? '$' + ' ' + price
            : currency_code === 'USD'
            ? '€' + ' ' + price
            : currency_code + ' ' + price}
</p>
  )
}

export default ItemPrice
