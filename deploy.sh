GOOGLE_PROJECT_ID=soy-totem-366309
gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/habit-api \
 --project=$GOOGLE_PROJECT_ID

gcloud run deploy habit-api \
    --image gcr.io/$GOOGLE_PROJECT_ID/habit-api \
    --platform managed \
    --region europe-west1 \
    --allow-unauthenticated \
    --project=$GOOGLE_PROJECT_ID