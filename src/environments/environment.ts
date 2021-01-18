const HOST_SEARCH_URL = 'http://challenge-meli-query.herokuapp.com';

export const environment = {
  production: false,
  SEARCH_ALERTS_BY_SERVER_NAME: `${HOST_SEARCH_URL}/challenge/alerts/search/name`,
  SEARCH_ALERTS_BY_DESCRIPTION_ALERT: `${HOST_SEARCH_URL}/challenge/alerts/search/description`
};
