const { app } = require('./app');

async function main() {


  try {
    app.listen(3000, console.log('Server on port 3000'));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }


};
main();