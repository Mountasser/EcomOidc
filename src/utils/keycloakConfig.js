import Keycloak from 'keycloak-js'

const keycloakConfig = {
  url: 'http://localhost:8080/auth', 
  realm: 'EcomRealm', 
  clientId: 'Ecom',
  onLoad: 'login-required'

}
const keycloak = new Keycloak(keycloakConfig);
keycloak.init({ onLoad: keycloakConfig.onLoad }).success((auth) => {

    if (!auth) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }

    //React Render

    localStorage.setItem("react-token", keycloak.token);
    localStorage.setItem("react-refresh-token", keycloak.refreshToken);

    setTimeout(() => {
        keycloak.updateToken(70).success((refreshed) => {
            if (refreshed) {
                console.debug('Token refreshed' + refreshed);
            } else {
                console.warn('Token not refreshed, valid for '
                    + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).error(() => {
            console.error('Failed to refresh token');
        });


    }, 60000)

}).error(() => {
    console.error("Authenticated Failed");
});
export default keycloak