import { setupWorker, rest } from 'msw';

export const mocks = [
  rest.post(`http://localhost:3001/login`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: '1',
        name: 'Diego',
      })
    );
  }),
];

const worker = setupWorker(...mocks);
worker.start();

export { worker, rest };
