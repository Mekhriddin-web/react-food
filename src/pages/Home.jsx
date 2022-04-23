import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import { actionGetCategories } from '../store/actionCreator';
import { MealContext } from '../store/context';

const Home = () => {
  const { state, dispatch } = useContext(MealContext);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { search } = useLocation();
  const push = useNavigate();

  const { categories } = state;

  const handleSearch = str => {
    setFilteredCatalog(
      categories.filter(category =>
        category.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push(`?search=${str}`);
  };

  useEffect(() => {
    getAllCategories().then(data => {
      dispatch(actionGetCategories(data.categories));
      setFilteredCatalog(
        search
          ? data.categories.filter(category =>
              category.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search, dispatch]);

  return (
    <>
      <Search cb={handleSearch} />
      {!categories.length ? (
        <Preloader />
      ) : (
        <CategoryList categories={filteredCatalog} />
      )}
    </>
  );
};

export default Home;
