import '../styles.css';
import '../../node_modules/@pnotify/core/dist/PNotify.css';
import '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import 'lodash.debounce';
import fetchCountries from './fetchCountries';
import refs from './DOMRefs';
import debounce from 'lodash.debounce';

refs.searchInput.addEventListener('input', debounce(fetchCountries, 500))