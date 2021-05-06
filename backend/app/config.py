from pydantic import BaseSettings


class Settings(BaseSettings):
    mongodb_url: str
    env_var: str = "dev"

    class Config:
        env_file = ".env"
