import { NzSafeAny } from 'ng-zorro-antd/core/types/any';
import { ITokenModel } from '../interface';

export class SimpleTokenModel implements ITokenModel {
  [key: string]: NzSafeAny;

  token: string;
}
