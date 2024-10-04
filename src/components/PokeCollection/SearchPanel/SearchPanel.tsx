import styles from "./SearchPanel.module.css";

function SearchPanel() {
  return (
    <>
      <div className={styles.searchPanel}>
        <form className={styles.searchContainer}>
          <input className={styles.searchInput}></input>
          <button className={styles.searchButton}>Search</button>
        </form>

        <div className={styles.pokeCard}>
          <div className={styles.title}>
            <h2 className={styles.pokeName}>PokeName</h2>
            <span className={styles.pokeId}>PokeId</span>
          </div>
          <img className={styles.pokeImage}></img>
          <div className={styles.pokeType}>
            <span>Type 1</span>
            <span>Type 2</span>
            <span>Type 3</span>
            {/* <span>Type 4</span>
            <span>Type 5</span>
            <span>Type 6</span>
            <span>Type 7</span> */}
          </div>
          <div className={styles.pokeStatus}>
            <div className={styles.status__container}>
              <div className={styles.status__number}>
                <div className={styles.status__image}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_669)">
                      <path
                        d="M14 2H11.9747C11.0609 0.793125 9.62719 0 8 0C6.37281 0 4.93906 0.793125 4.02531 2H2C0.897187 2 0 2.89719 0 4V14C0 15.1028 0.897187 16 2 16H14C15.1028 16 16 15.1028 16 14V4C16 2.89719 15.1028 2 14 2ZM8 1C10.2091 1 12 2.79094 12 5C12 7.20906 10.2091 9 8 9C5.79094 9 4 7.20906 4 5C4 2.79094 5.79094 1 8 1ZM15 14C15 14.5522 14.5522 15 14 15H2C1.44781 15 1 14.5522 1 14V4C1 3.44781 1.44781 3 2 3H3.42375C3.15437 3.61344 3 4.28813 3 5C3 7.75688 5.24312 10 8 10C10.7569 10 13 7.75688 13 5C13 4.28813 12.8456 3.61344 12.5763 3H14C14.5522 3 15 3.44781 15 4V14ZM8 8C8.82719 8 9.5 7.32719 9.5 6.5C9.5 6.065 9.31094 5.67625 9.01437 5.40219L9.95938 3.19688C10.0681 2.94344 9.95063 2.64938 9.69656 2.54063C9.44406 2.43187 9.14906 2.54906 9.04031 2.80344L8.09469 5.00969C6.98656 4.9375 6.5 5.89531 6.5 6.5C6.5 7.32719 7.17281 8 8 8ZM8 6C8.27625 6 8.5 6.22375 8.5 6.5C8.5 6.77625 8.27625 7 8 7C7.72375 7 7.5 6.77625 7.5 6.5C7.5 6.22375 7.72375 6 8 6Z"
                        fill="#0F172A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_669">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span>0,0 kg</span>
              </div>
              <span className={styles.status__title}>Weight</span>
            </div>
            <div className={styles.status__divisor}></div>
            <div className={styles.status__container}>
              <div className={styles.status__number}>
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Frame" clip-path="url(#clip0_2_676)">
                    <path
                      id="Vector"
                      d="M7.5 0H1.5C0.947812 0 0.5 0.447812 0.5 1V15C0.5 15.5522 0.947812 16 1.5 16H7.5C8.05219 16 8.5 15.5522 8.5 15V1C8.5 0.447812 8.05219 0 7.5 0ZM1.5 15V1H7.5V3H5.75C5.61188 3 5.5 3.11188 5.5 3.25V3.75C5.5 3.88812 5.61188 4 5.75 4H7.5V6H5.75C5.61188 6 5.5 6.11188 5.5 6.25V6.75C5.5 6.88812 5.61188 7 5.75 7H7.5V9H5.75C5.61188 9 5.5 9.11187 5.5 9.25V9.75C5.5 9.88813 5.61188 10 5.75 10H7.5V12H5.75C5.61188 12 5.5 12.1119 5.5 12.25V12.75C5.5 12.8881 5.61188 13 5.75 13H7.5V15H1.5Z"
                      fill="#0F172A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_676">
                      <rect
                        width="8"
                        height="16"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>0,0 m</span>
              </div>
              <span className={styles.status__title}>Height</span>
            </div>
          </div>
        </div>

        <button className={styles.addToFavorites}>
          <div className={styles.favoriteImage}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="white" />
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="#3B76F6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span>Add to Favorites</span>
        </button>

        <button className={`${styles.addToFavorites} ${styles.removeToFavorites}`}>
          <div className={styles.favoriteImage}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                transform="translate(0.5)"
                fill="white"
              />
              <path
                d="M12.5 2L15.59 8.26L22.5 9.27L17.5 14.14L18.68 21.02L12.5 17.77L6.32 21.02L7.5 14.14L2.5 9.27L9.41 8.26L12.5 2Z"
                fill="#3B76F6"
                stroke="#3B76F6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span>Remove to Favorites</span>
        </button>
      </div>
    </>
  );
}

export default SearchPanel;
