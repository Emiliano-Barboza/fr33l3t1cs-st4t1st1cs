angular
    .module("myApp.freeleticsAPIService", [])
    .service('freeleticsAPI', function () {
        var request = function (url, method, data) {
            /*var options = {};
            var requestUrl;

            if (_.isObject(url)) {
                options = url;
            }

            if (ngProgress.status() === 0) {
                ngProgress.start();
            }

            requestUrl = API_URL + url;
            return oauth.getOauth1Token().then(function (oAuthToken) {
                // In case the query params doesn't exists
                if (requestUrl.indexOf("?") === -1) {
                    requestUrl += "?";
                }
                else {
                    requestUrl += "&";
                }

                var accessTokenParam = {};
                accessTokenParam[ACCESS_TOKEN_PARAM_NAME] = oAuthToken;

                // Encoding the parameter
                requestUrl += $.param(accessTokenParam);

                options = _.defaults({}, options, {
                    url: requestUrl,
                    method: method
                });

                options.headers = options.headers || {};

                if (data) {
                    options.data = data;
                }

                return $http(options).then(function (response) {
                    return response;
                }).catch(function (error) {
                    return self.handleError(requestUrl, error);
                }).finally(function () {
                    ngProgress.complete();
                });
            });*/
        };

        return{

        }
    });
