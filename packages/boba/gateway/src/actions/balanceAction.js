/*
  Varna - A Privacy-Preserving Marketplace
  Varna uses Fully Homomorphic Encryption to make markets fair. 
  Copyright (C) 2021 Enya Inc. Palo Alto, CA

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

import networkService from 'services/networkService';
import { createAction } from './createAction';

export function fetchL1LPBalance(address) {
    return createAction('FETCH/L1LP/BALANCE', () => networkService.L1LPBalance(address))
}
export function fetchL1TotalFeeRate() {
    return createAction('FETCH/L1TOTALFEERATE', () => networkService.getL1TotalFeeRate())
}
export function fetchFastExitCost(address) {
    return createAction('FETCH/FASTEXIT/COST', () => networkService.getFastExitCost(address))
}
export function fetchL2FeeBalance() {
    return createAction('FETCH/L2FEE/BALANCE', () => networkService.getL2FeeBalance())
}