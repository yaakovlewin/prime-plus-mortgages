import { firebaseConfig } from "@/js/config/firebaseConfig";
import { initializeApp } from "firebase/app";
import { initiolizeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFirestore } from "firebase/firestore";

const SiteKey = process.env.reCAPTCHA_site_key;

const app = initializeApp(firebaseConfig);

const appCheck = initiolizeAppCheck({
  provider: new ReCaptchaV3Provider(SiteKey),
  isTokenAutoRefreshEnabled: true,
});

const db = getFirestore(app);

export { app, db };
