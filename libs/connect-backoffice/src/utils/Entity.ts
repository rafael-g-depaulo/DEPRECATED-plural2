export type Date = string

export interface Entity {
  id: number,
  created_at: Date,
  updated_at: Date,
  published_at: Date,
}
