import { useSession } from "../../Context/SessionProvider"

const CategoryIndexRenderer = ({ instanceID }) => {
  const { currentCategoryIndex } = useSession()

  return (
    <div className="category-index-renderer">
      <h4 className="category-index-renderer__title">Instance {instanceID}:</h4>
      <p className="category-index-renderer__value">{currentCategoryIndex}</p>
    </div>
  )
}

export default CategoryIndexRenderer
