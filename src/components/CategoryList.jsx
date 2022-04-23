import CategoryItem from './CategoryItem';

const CategoryList = ({ categories }) => {
  return (
    <div className="list">
      {categories.map(category => (
        <CategoryItem key={category.idCategory} {...category} />
      ))}
    </div>
  );
};

export default CategoryList;
