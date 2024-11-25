import { useAppDispatch } from '../../hooks';
import { changeDirection, changeSortType } from '../../store/main-process/main-process';

const CatalogSort = () => {
  const dispatch = useAppDispatch();

  const handleSortTypeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSortType(evt.currentTarget.id));
  };

  const handleDirectionChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeDirection(evt.currentTarget.id));
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title&#45;&#45;h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input type="radio" id="sortPrice" name="sort" defaultChecked onChange={(evt) => handleSortTypeChange(evt)} />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input type="radio" id="sortPopular" name="sort" onChange={(evt) => handleSortTypeChange(evt)}/>
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn&#45;&#45;up">
              <input type="radio" id="up" name="sort-icon" defaultChecked aria-label="По возрастанию" onChange={(evt) => handleDirectionChange(evt)} />
              <label htmlFor="up">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn&#45;&#45;down">
              <input type="radio" id="down" name="sort-icon" aria-label="По убыванию" onChange={(evt) => handleDirectionChange(evt)}/>
              <label htmlFor="down">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CatalogSort;
