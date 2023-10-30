import { 
    Express, 
    Request,
    Response 
} from "express";

export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);

  app.post('/api/sessions', validateRequest(createUserSessionSchema), createUserSessionHandler);

  app.delete('/api/sessions', requiresUser, invalidateUserSessionHandler);

  app.get('/api/sessions', requiresUser, getUserSessionsHandler);

  app.post('/api/posts', [requiresUser, validateRequest(createPostSchema)], createPostHandler);

  app.get('/api/posts/:postId', getPostHandler);

  app.put('/api/posts/:postId', [requiresUser, validateRequest(updatePostSchema)], updatePostHandler);

  app.delete('/api/posts/:postId', [requiresUser, validateRequest(deletePostSchema)], deletePostHandler);

}