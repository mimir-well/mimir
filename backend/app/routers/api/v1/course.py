from database import course as mongodb_course
from fastapi import APIRouter, status
from models.course import CourseSuccessResponse

router = APIRouter(
    prefix="/course",
    tags=["api / v1 / course"]
)


@router.post(
    "/",
    summary="NotImplemented",
)
async def create_course():
    return {"ok": True}


@router.get(
    "/{course_id}",
    response_model=CourseSuccessResponse,
    response_model_exclude_none=True,
    status_code=status.HTTP_200_OK,
)
async def get_course(course_id: str):
    course = await mongodb_course.get_course(course_id)
    return {"ok": True, "data": course}
