from motor.motor_asyncio import AsyncIOMotorClient

from config import Settings

settings = Settings()
MONGODB_URL = settings.mongodb_url
client = AsyncIOMotorClient(MONGODB_URL)
db = client.mimir

# Collections
user_collection = db.get_collection('user')
curriculum_collection = db.get_collection('curriculum')
course_collection = db.get_collection('course')
article_collection = db.get_collection('article')
