import uvicorn
from fastapi import FastAPI

from config import Settings
from routers.api import router as apis_router

settings = Settings()
app = FastAPI(
    title="ᛗᛁᛗᛁᚱ",
    description=("The goal of this app is to give place for community to "
                 "create curriculums and courses based on free and public "
                 "articles, videos and other resources."),
    version="0.0.1"
)

app.include_router(apis_router)


@app.get("/")
async def main():
    data = {
        "Hello": "world!",
    }
    return data


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
