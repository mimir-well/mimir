import uvicorn
from fastapi import FastAPI

from config import Settings

app = FastAPI()
settings = Settings()


@app.get("/")
async def main():
    data = {
        "env_var": settings.mongodb_url,
        "add": 1,
    }
    return data


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
