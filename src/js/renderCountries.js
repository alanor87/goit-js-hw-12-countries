import countriesListMarkup from '../templates/countries-list.hbs';
import countryInfoMarkup from '../templates/country-info.hbs';
import { info, error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';

import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import refs from './DOMRefs';

const pNotifyOptions = {
    styling: 'material',
    icons: 'material',
    minHeight: '50px;',
    modules: defaultModules,
}

export function renderCountries(countriesArray) {
    if (countriesArray.length > 9) {
        renderNotify();
        return;
    }
    if (countriesArray.length === 1) {
        renderCountyInfo(countriesArray);
        return;
    }
    renderCountriesList(countriesArray);

}

function renderCountriesList(countriesArray) {
    const markup = countriesListMarkup(countriesArray);
    refs.countriesContainer.innerHTML = markup;

}

function renderCountyInfo([country]) {
    const markup = countryInfoMarkup(country);
    refs.countriesContainer.innerHTML = markup;

}

function renderNotify() {
    info({
        title: 'Note',
        text: "Too many matches, reduce the query, please!",
        type: 'info',
        ...pNotifyOptions
    });

}

export function errorMsg() {
    refs.countriesContainer.innerHTML = '';
    error({
        title: 'Error',
        text: "No such country in database!",
        ...pNotifyOptions
    });
}