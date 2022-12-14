import React from 'react';
import '../scss/app.scss';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Pagination } from '../components/Pagination';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

export const Home = () => {
  const dispatch = useDispatch();//
  const categoryId = useSelector((state) => state.filter.categoryId);//
  const sortType = useSelector((state) => state.filter.sortType)

  const {searchValue} = React.useContext(SearchContext)
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  //Использовались для реализации через состояния компонентов
  //const [categoryId, setcategoryId] = React.useState(0);
  // const [sortType, setsortType] = React.useState({
  //   name: 'популярности',
  //   sort: 'raiting',
  //   order: 'desc',
  // });

  //Так раньше надо было создавать экшн с указанием типа и пэйлоад.
  // const setCategoryIdObject = (id) => {
  //   return { type: 'filter/setCategoryId', payload: id };
  // }

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id)) //с помощью хука usedispath передаем(оповещаем) номер категории в редакс
    //в action  setCategory будет хранится type(filter/setCategoryId) и payload - id - делает это логика тулкит
  }

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62b05231b0a980a2ef504c53.mockapi.io/items?page=${currentPage}&limit=4&category=${
        categoryId > 0 ? `${categoryId}` : ''
      }&sortBy=${sortType.sort}&order=${sortType.order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzasList = items
    .filter(item => {
    if(item.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
    })
    .map((itemPizza) => <PizzaBlock key={itemPizza.id} {...itemPizza} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />) 

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletons : pizzasList}
      </div>
      <Pagination onChangePage={number => setCurrentPage(number)}/>
    </div>
  );
};
