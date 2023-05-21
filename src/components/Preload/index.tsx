import { FC, useEffect, useState } from "react";
import "./styles.css";

interface LoadingProps {
  open?: boolean;
  text?: string;
}

export const Preload: FC<LoadingProps> = ({ open, text }) => {
  const [loading, setLoading] = useState(open);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loading-spinner" />
          <div>
            <h2>{text ? text : "Cargando..."}</h2>
          </div>
        </div>
      )}
    </>
  );
};
