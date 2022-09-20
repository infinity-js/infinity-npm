export interface BaseRepository<Entity, FindOne, FindMany> {
  create(entity: Entity): Promise<void>;
  update(entity: Entity): Promise<void>;
  findOne(findOne: FindOne): Promise<Entity | undefined>;
  findMany(findMany: FindMany): Promise<Entity[]>;
}
