module.exports = ({ env }) => ({
    upload: {
        provider: "google-cloud-storage",
        providerOptions: {
            serviceAccount: require(env('SERVICE_ACCOUNT_KEY')),  
            bucketName: env('GSC_BUCKET_NAME'),
            baseUrl: env("GSC_BUCKET_URL")
        }
    }
  });