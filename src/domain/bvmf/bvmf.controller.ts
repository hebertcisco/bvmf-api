import { Request, Response } from 'express';
import Cors from 'cors';
import bvmf from 'bvmf';

const cors = Cors({
  methods: ['GET'],
});

class BVMFController {
  async read(req: Request, res: Response) {
    const { code } = req.params;
    try {
      const returnQuote = await bvmf({ bvmf: code, max: 1 });
      return res.status(200).json(returnQuote.stock[0]);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
export default new BVMFController();
