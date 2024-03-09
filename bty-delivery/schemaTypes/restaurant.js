import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: rule=>rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: rule=>rule.max(200)
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Category'
    },
    {
        name: 'lat',
        type: 'number',
        title: 'Latitude of the restaurant'
      },
      {
        name: 'lng',
        type: 'number',
        title: 'Longitude of the restaurant'
      },
      {
        name: 'address',
        type: 'string',
        title: 'Restaurant Address',
        validation: rule=>rule.required()
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Enter a number between 1 to 5',
        validation: rule=>rule.required().min(1).max(5).error('Please enter a value between 1 and 5')
      },
      {
        name: 'reviews',
        type: 'string',
        title: 'Reviews'
      },
      {
        name: 'type',
        type: 'reference',
        title: 'Category',
        to:[{type: 'category'}]
      },
      {
        name: 'dishes',
        type: 'array',
        title: 'Dishes',
        of: [{type: 'reference', to: [{type: 'dish'}]}]
      },
      
  ],
})
