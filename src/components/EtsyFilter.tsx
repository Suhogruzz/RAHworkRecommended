import Etsy from '../assets/etsy.json';

[...Etsy].forEach(element => {
    console.log(element)
});
const FilteredEtsy = Etsy.filter(
    (el) =>
        el.listing_id &&
        el.url &&
        el.MainImage.url_570xN &&
        el.title &&
        el.currency_code &&
        el.price &&
        el.quantity
)
.map((el: { [key: string]: unknown }) => {
    const newObject = Object.keys(el)
        .filter(
            (key: string) =>
                key === 'listing_id' ||
                key === 'url' ||
                key === 'MainImage' ||
                key === 'title' ||
                key === 'currency_code' ||
                key === 'price' ||
                key === 'quantity'
        )
        .reduce((result: { [key: string]: unknown }, key: string) => {
            result[key] = el[key];
            return result;
        }, {});
    return newObject;
});

export default FilteredEtsy