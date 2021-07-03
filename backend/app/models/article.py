from typing import List, Optional

from pydantic import BaseModel, Field

from models import SuccessResponseBase


class BaseBlock(BaseModel):
    type: str
    content: str


class ArticleRequestModel(BaseModel):
    owner_id: str
    name: str
    is_draft: bool = False
    content: Optional[List[BaseBlock]] = None

    class Config:
        schema_extra = {
            "example": {
                "owner_id": "1",
                "name": "Test Article Name",
                "is_draft": False,
            }
        }


class ArticleResponseModel(ArticleRequestModel):
    id: str = Field(..., alias='_id')
    db_schema: str = Field(..., alias='_schema')
    slug: str


class ArticleSuccessResponse(SuccessResponseBase):
    data: ArticleResponseModel
