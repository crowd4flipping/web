import { ProjectStatus, projectStatusList } from "@/routes/C4FCloudRoutes";

export function unhandledType(value: never): value is never {
  return value;
}

export function getReadableDate(props: {
  dd: string;
  mm: string;
  yyyy: string;
}) {
  const { dd, mm, yyyy } = props;
  const now = new Date();
  const msDay = 1000 * 60 * 60 * 24;
  const date = new Date(`${yyyy}/${mm}/${dd}`);
  const daysTime = now.getTime() - date.getTime();
  const days = Math.ceil(daysTime / msDay);

  if (days === 0) return "Hoy";
  if (days === 1) return "Hace 1 día";
  if (days < 30) return `Hace ${days} días`;

  const months = Math.ceil(days / 30);
  if (months <= 1) return "Hace 1 mes";
  if (months <= 12) return `Hace ${months} meses`;

  const years = days / 365;
  if (years <= 1) return "Hace 1 año";

  const toYears = now.getFullYear() - date.getFullYear();
  if (toYears === 1) return "Hace 1 año";
  return `Hace ${toYears} años`;
}

export function isValidStatus(value: string): value is ProjectStatus {
  const statusFound = projectStatusList.find(
    (status) => status === value.toLowerCase()
  );
  if (!statusFound) return false;
  return true;
}

type Map<Type> = {
  value: Array<Type>;
  do: <TNewType>(fn: (value: Type) => TNewType | undefined) => Map<TNewType>;
};

export function mapWithoutUndefined<TArray>(
  values: Array<TArray>
): Map<TArray> {
  const iterate = <TNewType>(fn: (_: TArray) => TNewType | undefined) => {
    let newArray: Array<TNewType> = [];

    values.forEach((value) => {
      const newValue = fn(value);
      if (!newValue) return;
      newArray.push(newValue);
    });

    return mapWithoutUndefined(newArray);
  };

  return {
    value: [...values],
    do: iterate,
  };
}
