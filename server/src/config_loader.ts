import fs from "fs";

export interface Fish {
    id: number;
    name: string;
    description: string;
    rarity: number;
    price: number;
}

export interface Stats {
    reel_speed: number;
    luck: number;
}

export const game_data = {
    fish: [] as Fish[],
    stats: [] as Stats[],
};

export function load_game_data() {
    game_data.fish = JSON.parse(fs.readFileSync("./game_data/fish.json", "utf-8"));
    game_data.stats = JSON.parse(fs.readFileSync("./game_data/stats.json", "utf-8"));

    console.log("JSONs loaded");
}