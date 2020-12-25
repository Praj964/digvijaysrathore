function importAll(r) {

    var array = r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
        module: r(fileName).meta
    }))

    console.log(array)

    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
        module: r(fileName).meta
    }))
}

export const posts = importAll(
    require.context("../pages/posts/", true, /\.mdx$/)
)