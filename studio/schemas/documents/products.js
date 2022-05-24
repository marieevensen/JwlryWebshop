export default {
    title: 'Products',
    name: 'products',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {   
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{ type: 'category' }]
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {   
            title: 'Price',
            name: 'price',
            type: 'number'
        }
    ]
}