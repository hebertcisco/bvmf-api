import cheerio from 'cheerio';
import { IBOV } from './status.interface';

class StatusService {
    public static async extractHTML(htmlContent: string) {
        return new Promise((resolve, reject) => {
            try {
                const result: IBOV[] = [];
                const $ = cheerio.load(htmlContent);
                result.push({
                    ibov_index: $('body')
                        .find('div.fill-lightgray.border-b')
                        .find('div')
                        .find('div.row')
                        .find('div.col-12.col-lg-8.order-2.order-lg-1')
                        .find('div')
                        .find('div.line-info')
                        .find('div.value')
                        .find('p')
                        .text()
                })

                resolve({ result });
            } catch (err) {
                reject(err);
            }
        })
    }
}

export { StatusService };