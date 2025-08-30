import fs from "fs";
import { Fish, Stats } from "../../shared/types/fish";

export const game_data = {
    fish: [] as Fish[],
    stats: [] as Stats[],
    fishMap: new Map<number, Fish>(),
};

export function load_game_data() {
    game_data.stats = JSON.parse(fs.readFileSync("./game_data/stats.json", "utf-8"));

    const fishList: Fish[] = JSON.parse(
        fs.readFileSync("./game_data/fish.json", "utf-8")
    );

    game_data.fish = fishList;
    game_data.fishMap = new Map(fishList.map(fish => [fish.id, fish]));

    console.log("JSONs loaded");
}

export function getFishById(id: number): Fish | undefined {
    return game_data.fishMap.get(id);
}