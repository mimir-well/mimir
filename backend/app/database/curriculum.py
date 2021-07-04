from typing import Dict, Union

from bson.objectid import ObjectId

from database import curriculum_collection


async def get_curriculum(course_id: Union[str, ObjectId], *args, **kwargs) -> Dict:
    if isinstance(course_id, str):
        course_id = ObjectId(course_id)

    # TODO add name and slug to result
    curriculum = await curriculum_collection.find_one({"_id": course_id})
    if curriculum:
        curriculum['_id'] = str(curriculum['_id'])
        curriculum['owner_id'] = str(curriculum['owner_id'].id)
        curriculum['content'] = [str(item.id) for item in curriculum['content']]
    return curriculum
