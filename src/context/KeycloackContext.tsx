import React, { createContext, useState, useEffect, useContext, useCallback } from "react";
import Keycloak, { KeycloakInstance } from "keycloak-js";

// Définir les types pour l'état du contexte
interface KeycloakContextType {
  kc: KeycloakInstance | null;
  initialized: boolean;
  authenticated: boolean;
  error: string | null;
}

interface KeycloakProviderProps {
  children: React.ReactNode;
}

// Créer un contexte Keycloak
const KeycloakContext = createContext<KeycloakContextType | undefined>(undefined);

// Créer un provider pour encapsuler votre application
export const KeycloakProvider: React.FC<KeycloakProviderProps> = ({ children }) => {
  const [kc, setKc] = useState<KeycloakInstance | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  // Initialiser Keycloak
  const initKeycloak = useCallback(async () => {
    const keycloak = new Keycloak({
      url: "http://localhost:2100", 
      realm: "secure_apk", 
      clientId: "client_front",
    });

    try {
      const authenticated = await keycloak.init({
        onLoad: "login-required", // Peut être `check-sso` si vous voulez vérifier la session
        checkLoginIframe: false,  // Désactiver le contrôle des iframes pour éviter les vérifications répétées
        pkceMethod: "S256", // Recommandé pour la sécurité
      });

      setKc(keycloak);
      setAuthenticated(authenticated);
      setInitialized(true);
    } catch (err) {
      setError("Erreur lors de l'initialisation de Keycloak");
      console.error("Erreur Keycloak", err);
    }
  }, []);

  const refreshToken = async () => {
    try {
      // Rafraîchir le token s'il expire dans les 30 prochaines secondes
      const refreshed = await kc?.updateToken(30);
      if (refreshed) {
        console.log('Token rafraîchi');
      }
    } catch (error) {
      console.error('Échec du rafraîchissement du token', error);
      // Si le rafraîchissement échoue, déconnecter l'utilisateur
      kc?.logout({ redirectUri: window.location.origin });
    }
  };



  useEffect(() => {
    initKeycloak();
  }, [initKeycloak]);

  useEffect(() => {
    const intervalId = setInterval(refreshToken, 60000); // Rafraîchir toutes les 60 secondes
    return () => clearInterval(intervalId); // Nettoyer l'intervalle lorsque le composant est démonté
  }, []);

  return (
    <KeycloakContext.Provider value={{ kc, initialized, authenticated, error }}>
      {children}
    </KeycloakContext.Provider>
  );
};

// Utiliser le contexte dans un autre composant
export const useKeycloak = (): KeycloakContextType => {
  const context = useContext(KeycloakContext);

  if (!context) {
    throw new Error("useKeycloak must be used within a KeycloakProvider");
  }

  return context;
};
