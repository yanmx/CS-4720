import I18n from 'react-native-i18n'
import en from './en'
import ar from './ar'
// import { getLanguages } from 'react-native-i18n';

// if (getLanguages()=='ar'){
//     I18n.locale='ar'
// }

// else{
//     I18n.locale='en'
// }

I18n.fallbacks = true;
I18n.locale = 'ar';
I18n.translations = {
    en,
    ar
};
  
export default I18n;