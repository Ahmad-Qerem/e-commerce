import styles from "./styles.module.css";
import Card from "./Card";
import QuickView from "./QuickView";
import { useState } from "react";

const NewArrivals = ({ Title, Products, SortPy }) => {
  const [open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);
  const handleClickOpen = (index) => {
    setIndex(index);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <QuickView
          Product={Products[Index]}
          Index={Index}
          open={open}
          handleClose={handleClose}
        />
      )}

      <div className={styles.MainContainer}>
        {Title && <h1 className={styles.MyH1}>{Title}</h1>}

        <div className={styles.MyContainer}>
          {Products &&
            Products.map((item, index) => {
              return (
                <Card
                  onClick={() => handleClickOpen(index)}
                  {...item}
                  index1={index}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
export { NewArrivals };
