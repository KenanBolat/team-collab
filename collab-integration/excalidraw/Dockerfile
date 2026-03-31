FROM tiangolo/uwsgi-nginx-flask:python3.11-2026-02-09 

WORKDIR /app

COPY excalidraw_integration.py .  

EXPOSE 3021
CMD ["python", "-u","excalidraw_integration.py"]
