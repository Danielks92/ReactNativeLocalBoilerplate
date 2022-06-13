import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

export const translationGetters: any = {
  en: () => require('./locales/en.json'),
  de: () => require('./locales/de.json'),
};

export const translate = memoize(
  (key: any, config?: any) => i18n.t(key, config),
  (key: any, config?: any) => (config ? key + JSON.stringify(config) : key),
);

export const init = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'en', isRTL: false};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  try{
    translate.cache.clear();
  }catch(e){
    
  }
  
  
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};
