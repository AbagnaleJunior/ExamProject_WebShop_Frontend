import { TestBed } from '@angular/core/testing';

import { BorrowedItemService } from './borrowedItem.service';

describe('BorrowedstuffService', () => {
  let service: BorrowedItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowedItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
