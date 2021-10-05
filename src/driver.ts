import { Invoice } from './invoice';
import { Receipt } from './receipt';
import { ExpressLikeRequest } from './utils';

export interface Driver {
  purchase(invoice: Invoice): Promise<string>;
  verify(object: any, req: ExpressLikeRequest): Promise<Receipt>;
  verifyManually(object: any): Promise<Receipt>;
}

export abstract class WithStrategy<StrategyType> {
  /**
   * The selected strategy
   */
  abstract selectedStrategy: StrategyType;

  /**
   * Selects the strategy
   * @param strategy chosen strategy
   */
  abstract strategy(strategy: StrategyType): WithStrategy<StrategyType>;
}
