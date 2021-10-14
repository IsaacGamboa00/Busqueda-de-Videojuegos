import { cheapestPriceEver } from './cheapestPriceEver';
import { Deals } from './deals';
import { Info } from './info';


export interface GameDetail{
    info:Info;
    cheapestPriceEver:cheapestPriceEver;
    deals:Deals[];
}