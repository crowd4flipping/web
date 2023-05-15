import styles from "./styles/Map.module.scss";
import Map from "@/components/maps";

export const Location = ({
  coordenates,
}: {
  coordenates: { latitude: string; longitude: string };
}) => {
  return (
    <div className={styles.map}>
      <div className={styles.map_content}>
        <Map
          lat={
            coordenates.latitude
              ? parseFloat(coordenates.latitude)
              : 39.57766747597557
          }
          lng={
            coordenates.longitude
              ? parseFloat(coordenates.longitude)
              : 2.6414387504611745
          }
        />
      </div>
    </div>
  );
};
