const HOST_SEARCH_URL = 'https://challenge-meli-query.herokuapp.com';

export const environment = {
  production: true,
  SEARCH_ALERTS_BY_SERVER_NAME: `${HOST_SEARCH_URL}/challenge/alerts/search/name`,
  SEARCH_ALERTS_BY_DESCRIPTION_ALERT: `${HOST_SEARCH_URL}/challenge/alerts/search/description`,
  SEARCH_ALERTS_BY_ANY_FIELD: `${HOST_SEARCH_URL}/challenge/alerts/search/any/field`
};
