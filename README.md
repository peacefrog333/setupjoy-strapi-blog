# Strapi Blog Starter Kit

If you want to get more information on strapi do checkout the [offical docs](https://strapi.io/). It is a tool which will help you build and prototype things faster. To get an API done and deployed using strapi is very easy and to build on top on the basic API quite straight forward for any developer.

Checkout the official [features](https://strapi.io/features) and [roadmap](https://portal.productboard.com/strapi/1-public-roadmap/tabs/2-under-consideration) of strapi



## Deployment

### Google Cloud Storage
You can follow the tutorial by [Lith](https://github.com/Lith) on the [Strapi Google Storage Provider](https://github.com/Lith/strapi-provider-upload-google-cloud-storage) which is similar to the setup listed below.

Create buckets on GCS 
- https://cloud.google.com/storage/docs/creating-buckets

Google Authentication JSON configuration file
- [Create a new Service Account on GCP](https://console.cloud.google.com/apis/credentials/serviceaccountkey)
- Select Cloud Storage > Storage Admin
- Select JSON for the Key Type and download this JSON

Setup GCS on this project
- Copy the content of JSON file to a `service_account_key.json` file at the root of the project
- or update the app.yaml to include the path to another Service Account JSON file
- Also, remember to update the `GSC_BUCKET_NAME` and `GSC_BUCKET_NAME` of `app.yaml` before deploying

### Database
Create a Cloud MySQL instance on GCP \
Check the [pricing](
https://cloud.google.com/sql/pricing#2nd-gen-pricing) for MYSQL instances on GCP \
The Configuration for the production database configuration can be changed on `app.yaml`


### Deploy to Appengine
`gcloud app deploy app.yaml --project <project_name>`