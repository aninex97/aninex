import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "anime": "Anime",
      "cartoon": "Cartoon",
      "movies": "Movies",
      "series": "Series",
      "profile": "Profile",
      "search": "Search anime...",
      "continueWatching": "Continue Watching",
      "newestDrops": "Newest Drops",
      "trendingNow": "Trending Now",
      "availableLanguages": "Available Languages",
      "watchNow": "Watch Now",
      "episodes": "Episodes",
      "season": "Season",
      "duration": "Duration",
      "rating": "Rating",
      "genres": "Genres",
      "overview": "Overview",
      "similarAnime": "Similar Anime"
    }
  },
  hi: {
    translation: {
      "home": "होम",
      "anime": "अनिमे",
      "cartoon": "कार्टून",
      "movies": "फिल्में",
      "series": "सीरीज",
      "profile": "प्रोफाइल",
      "search": "अनिमे खोजें...",
      "continueWatching": "जारी रखें देखना",
      "newestDrops": "नवीनतम जोड़े",
      "trendingNow": "अभी ट्रेंडिंग",
      "availableLanguages": "उपलब्ध भाषाएं",
      "watchNow": "अभी देखें",
      "episodes": "एपिसोड",
      "season": "सीजन",
      "duration": "अवधि",
      "rating": "रेटिंग",
      "genres": "शैलियाँ",
      "overview": "अवलोकन",
      "similarAnime": "समान अनिमे"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;