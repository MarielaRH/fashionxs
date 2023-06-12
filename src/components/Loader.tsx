import styles from "@/styles/components/Loader.module.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center" style={{height: 'calc(100vh - 70px)'}}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
