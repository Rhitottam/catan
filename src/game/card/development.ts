import { CardType } from '.';
enum Development {
    knight = "knight",
    roadBuilding = "roadBuilding",
    yearOfPlenty = "yearOfPlenty",
    monopoly = "monopoly",
    victoryPoint = "victoryPoint",
};

type DevelopmentStock = {
    [key in Development]?: number;
};

let developmentLabels: Record<string, string> = {
    [Development.roadBuilding]: "road building",
    [Development.yearOfPlenty]: "year of plenty",
    [Development.victoryPoint]: "victory point",
};

export default Development;
export { DevelopmentStock, developmentLabels };