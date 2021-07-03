from typing import Any

from pydantic import BaseModel


class SuccessResponseBase(BaseModel):
    ok: bool = True
    data: Any
