export interface task {
    id: number
    name: string
    description: string
    categoryColor?: string
    categoryName?: string
    dueDate?: Date
    createdDate: Date
    userAssignedName?: string
    userCreatedName: string
}