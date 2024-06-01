import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface TempPower {
  tmf_action: string | string[];
  tmf_domain: string;
  tmf_function: string;
  tmf_type: string;
  dam: boolean;
  dau: boolean;
  asix: boolean;
}

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent {
  @Input() public isDisabled: boolean = false;
  @Input() public viewMode: 'create' | 'detail' = 'create';
  @Input() public power: TempPower[] = [];
  @Input() public addedOptions: TempPower[] = [];
  @Output() public addedOptionsChange = new EventEmitter<TempPower[]>();
  @Output() public selectedOptionChange = new EventEmitter<string>();
  @Output() public handleSelectChange = new EventEmitter<Event>();

  public selectedOption: string = '';

  public addOption(): void {
    if (this.isDisabled) return;

    if (this.addedOptions.some((option) => option.tmf_function === this.selectedOption)) {
      alert('This option has already been added.');
      return;
    }
    if (!this.selectedOption) {
      alert('Please select an option.');
      return;
    }

    const newOption: TempPower = {
      tmf_action: '',
      tmf_domain: 'PUIG',
      tmf_function: this.selectedOption,
      tmf_type: 'Domain',
      dam: false,
      dau: false,
      asix: false,
    };

    switch(this.selectedOption) {
      case 'SuperiorCycle':
        newOption.dam = false;
        newOption.dau = false;
        newOption.asix = false;
        break;
      default:
        break;
    }

    this.addedOptions.push(newOption);
    this.addedOptionsChange.emit(this.addedOptions);
    this.selectedOption = '';
  }

  public onHandleSelectChange(event: Event): void {
    this.handleSelectChange.emit(event);
  }
}
