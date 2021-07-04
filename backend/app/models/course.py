from typing import List, Optional, Union

from pydantic import BaseModel, Field

from models import SuccessResponseBase


class SectionModel(BaseModel):
    section_name: str
    content: List[str]


CourseContent = Union[List[SectionModel], List[str]]


class CourseRequestModel(BaseModel):
    owner_id: str
    name: str
    content: Optional[CourseContent] = None


class CourseResponseModel(CourseRequestModel):
    id: str = Field(..., alias='_id')
    db_schema: str = Field(..., alias='_schema')
    slug: str


class CourseSuccessResponse(SuccessResponseBase):
    data: CourseResponseModel
