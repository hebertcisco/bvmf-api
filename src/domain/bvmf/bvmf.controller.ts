import { Request, Response } from 'express';
import runMiddleware from 'expmidd';
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
      await runMiddleware(req, res, cors);
      return res.status(200).json(returnQuote);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}
export default new BVMFController();
