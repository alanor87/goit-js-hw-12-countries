import refs from './DOMRefs'
import { renderCountries, errorMsg } from './renderCountries';

export default () => {
    if (!refs.searchInput.value) {
        refs.countriesContainer.innerHTML = '';
        return;
    }
    return fetch(`https://restcountries.eu/rest/v2/name/${refs.searchInput.value}`)
        .then(responce => {
            if (!responce.ok) throw new Error;
            return responce.json()
        }
        )
        .then(renderCountries)
        .catch(errorMsg);
}