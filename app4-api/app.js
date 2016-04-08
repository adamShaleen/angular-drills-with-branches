angular.module('attempt4', []).factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {"X-Mashape-Key": "wmcMdybjiXmshNFcQF4a3D482IOVp1R9JBMjsn055TsJYvltFq", Accept: 'text/plain'};
      return config;
    }
  };
});
