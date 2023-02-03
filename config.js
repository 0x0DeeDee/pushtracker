if(process.env.NODE_ENV){
    require ('custom-env').env(process.env.NODE_ENV || 'prod');
  }else{
    process.env.NODE_ENV = 'prod';
    require ('custom-env').env(process.env.NODE_ENV);
  }


  module.exports = {
    // port: process.env.PORT,
    // CH_KEY: process.env.CH_KEY,
    // CH_PKEY: process.env.CH_PKEY,
    // AL_Key: process.env.AL_Key
    
    port: 3001,
    CH_KEY: '510e36835d346d5b5c53ff1bbba15a3c902326eb0d7d7d2f557a6d1a6802b8ec',
    CH_PKEY: '0xc40a06b948d37f90aFcE302FBdADCce1Ee4782b9',
    PR_KEY: '510e36835d346d5b5c53ff1bbba15a3c902326eb0d7d7d2f557a6d1a6802b8ec',
  };