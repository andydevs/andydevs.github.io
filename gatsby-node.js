const axios = require('axios')
const sharp = require('sharp')

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type ContentYamlProjects {
            id: Int,
            title: String,
            image: File @fileByRelativePath
            description: String,
            github: String,
            website: String
        }
    `
    createTypes(typeDefs)
}