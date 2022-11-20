import { useSession } from "../../Context/SessionProvider"

const CategoryConfigurationListRenderer = ({ instanceID }) => {
  const { categoryConfigurationList } = useSession()

  return (
    <div className="category-configuration-list-renderer">
      <h4 className="category-configuration-list-renderer__title">
        Instance {instanceID}:
      </h4>
      <p className="category-configuration-list-renderer__value">
        {categoryConfigurationList}
      </p>
    </div>
  )
}

export default CategoryConfigurationListRenderer
