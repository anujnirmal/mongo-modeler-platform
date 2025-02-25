import app from './app';

// Graceful shutdown handling
process.on('SIGTERM', (): void => {
  console.info('SIGTERM signal received.');
  process.exit(0);
});

process.on('SIGINT', (): void => {
  console.info('SIGINT signal received.');
  process.exit(0);
});

// Export the Express app
export default app;
