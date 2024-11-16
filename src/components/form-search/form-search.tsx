import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { selectCameras } from '../../store/cameras-data/selectors';
import { CameraType } from '../../types';
import { generatePath, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../constants';

type FormSearchProps = {
  basketCount?: number;
}

type SelectItemProps = {
  name: string;
  onClick: () => void;
  cameras: CameraType[];
  hoverCamera: string;
}

const SelectItem = ({name, onClick, cameras, hoverCamera}: SelectItemProps): JSX.Element => {
  const navigate = useNavigate();
  const hoverStyle = hoverCamera === name ? '#f4f4fc' : '';

  useEffect(() => {
    const focusedElement = document.getElementById(hoverCamera);
    let isMounted = true;
    if (isMounted && hoverCamera === name && focusedElement) {
      focusedElement.focus();
    }

    return () => {
      isMounted = false;
    };
  }, [hoverCamera, name]);

  const openCurrentCamera = () => {
    const currentCamera = cameras.filter((camera) => camera.name === name);
    onClick();
    navigate(generatePath(AppRoute.Camera, { id: (currentCamera[0].id).toString() }));
  };

  const handleItemClick = () => {
    openCurrentCamera();
  };

  const handleItemKeyDown = (evt: React.KeyboardEvent<HTMLLIElement>) => {
    if (evt.code === 'Enter') {
      openCurrentCamera();
    }
  };

  return (
    <li className="form-search__select-item" id={name} style={{backgroundColor: hoverStyle, outline: 0}} tabIndex={0} onClick={handleItemClick} onKeyDown={(evt) => handleItemKeyDown(evt)}>{name}</li>
  );
};

const FormSearch = ({basketCount}: FormSearchProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [cursor, setCursor] = useState<number>(-1);
  const selectList = useRef<null | HTMLUListElement>(null);
  const resetButton = useRef<null | HTMLButtonElement>(null);
  const cameras = useAppSelector(selectCameras);
  const cameraNames = cameras.map((camera) => camera.name);
  const foundCameraNames = cameraNames
    .filter((cameraName) => cameraName.match(new RegExp(searchValue, 'i')));

  const openSearch = () => {
    if (selectList.current !== null) {
      selectList.current.focus();
      selectList.current.style.visibility = 'visible';
      selectList.current.style.opacity = '1';
      document.body.classList.add('scroll-lock');
    }
  };

  const closeSearch = () => {
    if (selectList.current !== null) {
      selectList.current.removeAttribute('style');
      document.body.classList.remove('scroll-lock');
    }
  };

  const showResetButton = () => {
    if (resetButton.current !== null) {
      resetButton.current.style.display = 'flex';
    }
  };

  const hideResetButton = () => {
    if (resetButton.current !== null) {
      resetButton.current.removeAttribute('style');
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (searchValue.length >= 1 && isMounted) {
      showResetButton();
    } else {
      hideResetButton();
    }

    if (searchValue.length >= 3 && isMounted && foundCameraNames.length !== 0) {
      openSearch();
    } else {
      closeSearch();
    }

    return () => {
      isMounted = false;
      closeSearch();
      hideResetButton();
    };
  }, [searchValue, foundCameraNames.length]);

  const handleSelectItemClick = () => {
    setSearchValue('');
    setCursor(-1);
    closeSearch();
  };

  const handleResetButtonClick = () => {
    setSearchValue('');
    setCursor(-1);
  };

  const handleFormKeyDown = (evt: React.KeyboardEvent<HTMLFormElement>) => {
    if (cursor === foundCameraNames.length - 1) {
      setCursor(-1);
    }
    if (searchValue.length >= 3 && evt.code === 'ArrowDown' || evt.code === 'Tab') {
      setCursor((prevState) =>
        prevState < foundCameraNames.length - 1 ? prevState + 1 : prevState);
    }
    if (evt.code === 'ArrowUp' && cursor >= 0) {
      setCursor((prevState) => prevState > 0 ? prevState - 1 : prevState);
    }
  };

  return (
    <>
      <div className="form-search">
        <form onKeyDown={(evt) => handleFormKeyDown(evt)}>
          <label>
            <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
              <use xlinkHref="#icon-lens"></use>
            </svg>
            <input
              className="form-search__input"
              type="text"
              autoComplete="off"
              placeholder="Поиск по сайту"
              value={searchValue}
              onChange={(evt) => setSearchValue(evt.target.value)}
            />
          </label>
          <ul className="form-search__select-list" ref={selectList}>
            {foundCameraNames
              .map((cameraName) => <SelectItem key={cameraName} name={cameraName} onClick={handleSelectItemClick} cameras={cameras} hoverCamera={foundCameraNames[cursor]} />)}
          </ul>
        </form>
        <button className="form-search__reset" type="reset" ref={resetButton} onClick={handleResetButtonClick}>
          <svg width="10" height="10" aria-hidden="true">
            <use xlinkHref="#icon-close"></use>
          </svg><span className="visually-hidden">Сбросить поиск</span>
        </button>
      </div>
      <a className="header__basket-link" href="#">
        <svg width="16" height="16" aria-hidden="true">
          <use xlinkHref="#icon-basket"></use>
        </svg>
        {basketCount && <span className="header__basket-count">{basketCount}</span>}
      </a>
    </>
  );
};

export default FormSearch;
