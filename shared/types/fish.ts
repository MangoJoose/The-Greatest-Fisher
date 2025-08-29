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

export interface FishInstance {
    id: number;
    modifier: number;
}
