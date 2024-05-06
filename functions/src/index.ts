/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as Koa from 'koa';
import * as functions from 'firebase-functions';
import * as koaBody from 'koa-body';

import routes from './routes/routes';

export const app = new Koa();

app.use(koaBody());
app.use(routes.routes());
app.use(routes.allowedMethods());

export const apiBooks = functions.https.onRequest(async (req, res) => {
  try {
    await app.callback()(req, res);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
