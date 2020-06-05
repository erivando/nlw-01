import { Request, Response} from 'express';
import knex from '../database/connection';
//trocar quando por esse `http://localhost:3333/uploads/${item.image}`
class ItemsController{
    async index(request: Request, response: Response){
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image: `http://192.168.15.7:3333/uploads/${item.image}`
            }
        })
        return response.json(serializedItems);
    }
}

export default ItemsController;