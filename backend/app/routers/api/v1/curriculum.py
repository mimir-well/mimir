from fastapi import APIRouter, status
from models.curriculum import CurriculumSuccessResponse
from database import curriculum as mongodb_curriculum

router = APIRouter(
    prefix="/curriculum",
    tags=["api / v1 / curriculum"]
)


@router.post(
    "/",
    summary="NotImplemented",
)
async def create_curriculum():
    return {"ok": True}


@router.get(
    "/{curriculum_id}",
    response_model=CurriculumSuccessResponse,
    response_model_exclude_none=True,
    status_code=status.HTTP_200_OK,
)
async def get_curriculum(curriculum_id: str):
    course = await mongodb_curriculum.get_curriculum(curriculum_id)
    return {"ok": True, "data": course}
