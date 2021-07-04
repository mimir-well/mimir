from typing import List, Optional

from pydantic import BaseModel, Field

from models import SuccessResponseBase


class CurriculumRequestModel(BaseModel):
    owner_id: str
    name: str
    content: Optional[List[str]] = None


class CurriculumResponseModel(CurriculumRequestModel):
    id: str = Field(..., alias='_id')
    db_schema: str = Field(..., alias='_schema')
    slug: str


class CurriculumSuccessResponse(SuccessResponseBase):
    data: CurriculumResponseModel
