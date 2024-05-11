import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogitem-container">
      {blogsList.map(eachblog => (
        <BlogItem blogDetails={eachblog} key={eachblog.id} />
      ))}
    </ul>
  )
}

export default BlogList
