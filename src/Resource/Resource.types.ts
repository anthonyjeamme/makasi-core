export type TResource<TResourceData = any> = {
  id: string
  type: TResourceType
  data: TResourceData
  created_at: Date
  updated_at: Date
}

export type TResourceType = 'image' | 'video'
