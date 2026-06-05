const axios = require('axios')

async function sourceGithub(createNode, createNodeId, createContentDigest) {
    let query = /* GraphQL */ `
        {
            viewer {
                repositories(
                    first: 10
                    orderBy: { field: PUSHED_AT, direction: DESC }
                    ownerAffiliations: [OWNER]
                    isFork: false
                ) {
                    nodes {
                        name
                        pushedAt
                        languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
                            edges {
                                size
                                node {
                                    name
                                    color
                                }
                            }
                        }
                    }
                }
            }
        }
    `

    const response = await axios.post(
        'https://api.github.com/graphql',
        { query },
        { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } }
    )

    const repos = response.data.data.viewer.repositories.nodes.map(repo => {
        const languages = repo.languages.edges.map(edge => ({
            name: edge.node.name,
            color: edge.node.color,
            size: edge.size
        }))
        return { name: repo.name, pushedAt: repo.pushedAt, languages }
    })

    for (const repo of repos) {
        let contentDigest = createContentDigest(repo)
        createNode({
            ...repo,
            parent: null,
            children: [],
            id: createNodeId(`GitHubRepo-${repo.name}`),
            internal: { type: 'GithubRepo', contentDigest }
        })
    }
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions
    sourceGithub(createNode, createNodeId, createContentDigest)
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = /* GraphQL */ `
        type ContentYamlProjects {
            id: Int
            title: String
            image: File @fileByRelativePath
            description: String
            github: String
            website: String
        }
    `
    createTypes(typeDefs)
}
