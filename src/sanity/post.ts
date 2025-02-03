import { defineType, defineField, defineArrayMember } from "sanity"

export const Post = defineType({
    name: "post",
    type: "document",
    title: "Post",
    fields: [

        // Title field

        defineField({
            name: "title",
            type: "string",
            title: "Post Title",

        }),

        // Slug field

        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength: 96,

            },
            validation: Rule => Rule.required()
        }),

        // Summary field

        defineField({
            name: "summary",
            type: "text",
            title: "Summary",
            validation: Rule => Rule.required()
        }),

        // Image field

        defineField({
            name: "image",
            type: "image",
            title: "Image"
        }),


        // Content field

        defineField({
            name: "content",
            type: "array",
            title: "Content",
            of: [
                
                defineArrayMember({
                    type: "block"
                })
            ]

        }),


        // Reference field

        defineField({
            name: "author",
            type: "reference",
            title: "Author",
            to: [
                {type: "author"}
            ]
        })
    ]
})