import React from "react";
import firebase from "firebase";

export interface IFirebaseContext {
  firebase: firebase.app.App;
  authProviders: string[];
} 


export const FirebaseContext = React.createContext({} as IFirebaseContext);
