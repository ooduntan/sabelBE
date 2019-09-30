# Sabel backend docs

This repo implement the BE of sable endpoints

To run local please run
`npm run dev`

runs on port `3002`

There are three (3) endpoint exposed by this api

1. `POST /suspicious/approve` this is a post endpoint for approving suspicious transactions
2. `POST /suspicious/block` for blocking suspicious transactions
3. `GET /suspicious` for getting the list transaction waiting for reviews
