from typing import Any, Dict, List, Union

from bson.objectid import ObjectId

from database import course_collection


def course_content_to_iterable(content: List[Any], level=1) -> List[Any]:
    result: List[Any] = []
    for item in content:
        try:
            item_id = str(item.id)
            result.append(item_id)
        except AttributeError:
            if level > 2:
                continue
            cont = course_content_to_iterable(item['content'], level=level + 1)
            result.append({**item, 'content': cont})

    return result


async def get_course(course_id: Union[str, ObjectId], *args, **kwargs) -> Dict:
    if isinstance(course_id, str):
        course_id = ObjectId(course_id)

    # TODO add name and slug to result
    course = await course_collection.find_one({"_id": course_id})
    if course:
        course['_id'] = str(course['_id'])
        course['owner_id'] = str(course['owner_id'].id)

        course['content'] = course_content_to_iterable(course['content'])
    return course
