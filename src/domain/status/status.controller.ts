import { Request, Response } from 'express';
import runMiddleware from 'expmidd';
import Cors from 'cors';
import { StatusService } from './status.service';
import _throw from '../../utils/_throw';
import fetchPage from '../../services/fetchPage';
import { IBOV, IResult } from './status.interface';

const cors = Cors({
  methods: ['GET'],
});

class StatusController {
  private BASE_URL = 'https://www.infomoney.com.br/cotacoes/ibovespa/';
  private async run() {
    let ibovespa: IBOV[] = [];
    const contentPage: string | any = await fetchPage(this.BASE_URL);
    const result: IResult | any = await StatusService.extractHTML(contentPage);
    ibovespa.push(...result.result);
    return { ibovespa };
  }
  async show(req: Request, res: Response) {
    await runMiddleware(req, res, cors);
    const result = await this.run();
    res.status(200);
      res.json({
      status: 'online',
      date: new Date(),
      environment: process.env.NODE_ENV,
      aws: {
        region: process.env.AWS_REGION || 'local',
        function_version: process.env.AWS_LAMBDA_FUNCTION_VERSION || 'local',
      },
      ibovespa: result.ibovespa
    });
      
  }
}

export default new StatusController();
