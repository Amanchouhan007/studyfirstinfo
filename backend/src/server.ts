import app from './app';

const PORT = process.env.PORT || 5000;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`🚀 Study First Info Backend Foundation started on port ${PORT}`);
  });
};

startServer();
