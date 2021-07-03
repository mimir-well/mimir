from database.article import insert_article
from database.article import get_article as get_article_from_db
from fastapi import APIRouter

from models.article import ArticleRequestModel, ArticleSuccessResponse

router = APIRouter(
    prefix="/article",
    tags=["api / v1 / article"]
)


@router.post("/", response_model=ArticleSuccessResponse)
async def create_article(article: ArticleRequestModel):
    article_dict = article.dict()
    content = article_dict.get('content')

    new_article = await insert_article(owner_id=article.owner_id,
                                       name=article.name,
                                       slug=f"{article.name}_{article.owner_id}",
                                       is_draft=article.is_draft,
                                       content=content)

    return {"ok": True, "data": new_article}


@router.get("/{article_id}", response_model=ArticleSuccessResponse)
async def get_article(article_id: str):
    article = await get_article_from_db(article_id)
    return {"ok": True, "data": article}
