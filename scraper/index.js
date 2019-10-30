const WPAPI = require('wpapi/superagent')

const main = async () => {
  const endpoint = 'http://mayapuronline.ru/wp-json'
  const wp = new WPAPI({ endpoint })
  const posts = await wp.posts().get()
  for (const post of posts) {
    console.log(post.title.rendered)
  }
}

main()
