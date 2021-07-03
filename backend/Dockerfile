# For more information, please refer to https://aka.ms/vscode-docker-python
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

# Install pip requirements
COPY requirements.txt .
RUN pip install -U pip wheel setuptools
RUN pip install -r requirements.txt

COPY ./app /app
