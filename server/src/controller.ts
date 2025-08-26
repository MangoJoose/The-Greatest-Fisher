import { Request, Response } from "express";


export async function go_fish(req: Request, res: Response) {
    try {
        console.log("Controller Contacted");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error Fishing");
    }
}