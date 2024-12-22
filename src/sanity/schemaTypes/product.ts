import { defineField, defineType } from 'sanity'
import { SanityDocument } from '@sanity/types'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(150),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', 
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productDetails',
      title: 'Product Details',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(1000),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sideImages',
      title: 'Side Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'stockStatus',
      title: 'Stock Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'inStock' },
          { title: 'Out of Stock', value: 'outOfStock' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discountPrice',
      title: 'Discount Price',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'sale',
      title: 'On Sale?',
      type: 'boolean',
      description: 'Check this if the product is on sale.',
      initialValue: false,
    }),
    defineField({
      name: 'salePrice',
      title: 'Sale Price',
      type: 'number',
      description: 'The discounted sale price of the product.',
      hidden: ({ document }: { document?: SanityDocument }) => !document?.sale,  
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const { document } = context;
          if (document?.sale && (!value || value <= 0)) {
            return 'Sale Price is required and must be greater than zero when the product is on sale.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'saleTag',
      title: 'Sale Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Limited Time', value: 'limitedTime' },
          { title: 'Seasonal', value: 'seasonal' },
          { title: 'Clearance', value: 'clearance' },
        ],
      },
      hidden: ({ document }: { document?: SanityDocument }) => !document?.sale,  
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const { document } = context;
          if (document?.sale && !value) {
            return 'Sale Tag is required when the product is on sale.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Kids', value: 'kids' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});
