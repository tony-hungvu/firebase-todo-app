import * as Koa from 'koa';
import * as koaBody from 'koa-body';

import routes from './routes/routes';

const app = new Koa();

app.use(koaBody());
app.use(routes.routes());
app.use(routes.allowedMethods());

export default app;
