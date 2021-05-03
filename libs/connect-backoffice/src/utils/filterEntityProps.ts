import { Entity } from "./Entity"

export const filterEntityProps = <Obj extends Entity> (...propsArr: (keyof Obj)[]) => (obj: any): Obj => {
  const baseEntity: Entity = {
    id: obj.id,
    created_at: obj.created_at,
    published_at: obj.created_at,
    updated_at: obj.updated_at,
  }

  const entityProps: Obj = {} as Obj
  for (const prop of propsArr) {
    entityProps[prop] = obj[prop]
  }

  return {
    ...baseEntity,
    ...entityProps,
  }
}
