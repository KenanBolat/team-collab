# How to initiate the individual apps
## Environment files 
 - Each individual app has `.env.template` environment file prepared for you. Please change the configuration and necessary `IP` from those files and rename it to .env 
```bash 
    mv .env.template .env
``` 
## Drawing applications:
 - If `certs` and `libraries` folders does not exist
 ```bash
    cd scripts
    ./generate-cert.sh
    ./download_libraries.sh
 ```

## Mattermost integrations:
 - Excalidraw integration with mattermost:
    - All the integrations are being collectedo to the  `collab_integration` folder 
         - For example: excalidraw integration can be initiated from here.
         ```bash 
         docker compose up -d 
         ```  
         - make sure to edit related .env file an argument:
            ```bash
            EXCALIDRAW_BASE_URL=<your IP>
            ```