import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFormComponent } from './transfer-form.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {TransferService} from "../../../modules/transactions/services/transfer.service";
import {MatDialog} from "@angular/material/dialog";
import {CurrencyMaskPipe} from "../../pipes/currency-mask.pipe";
import {FormErrorPipe} from "../../pipes/form-error.pipe";

describe('TransferFormComponent', () => {
  let component: TransferFormComponent;
  let fixture: ComponentFixture<TransferFormComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), ReactiveFormsModule],
      declarations: [ TransferFormComponent, FormErrorPipe ],
      providers: [
        FormBuilder,
        CurrencyMaskPipe,
        TransferService,
        {
          provide: MatDialog,
          useValue: {}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('testing form the proper way', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    component.onSubmit();

    expect(component.fg.valid).toEqual(false);

  }));
});
