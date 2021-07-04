from fastapi import APIRouter
from .article import router as article_router
from .curriculum import router as curriculum_router
from .course import router as course_router

router = APIRouter(prefix="/v1")

router.include_router(curriculum_router)
router.include_router(course_router)
router.include_router(article_router)
